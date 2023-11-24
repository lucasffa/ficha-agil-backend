const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const UsersRepository = require('../repositories/UsersRepository');
const { validaCPF } = require('./Validators');
const { addToBlacklist } = require('../utils/blacklist');
const NodeCache = require('node-cache');
const userCache = new NodeCache({ stdTTL: 600 });
const usersCache = new NodeCache({ stdTTL: 600 });

class UsersController {
  async index(request, response) {
    const { email, password } = request.body;
    try {
      const user = await UsersRepository.signIn(email, password);

      if (!user) {
        return response.status(401).json({
          message: 'Usuário não encontrado ou inativo',
        });
      }

      const token = jwt.sign({ userId: user.IDUSUARIO }, JWT_SECRET, {
        expiresIn: '8h',
      });

      return response.status(200).json({ token, user });
    } catch (err) {
      return response.status(401).json(
        err.fatal === true
          ? {
              message:
                'Erro de conexão com o banco de dados, entre em contato com o administrador',
            }
          : { message: 'Usuário não encontrado ou inativo' }
      );
    }
  }

  async createUser(request, response) {
    const { name, cpf, email, password } = request.body;
    const createdAt = new Date();

    if (!validaCPF(cpf)) {
      return response.status(400).send({ message: 'CPF inválido.' });
    }
    try {
      await UsersRepository.createUser(name, cpf, email, password, createdAt);

      // Limpar o cache universal
      usersCache.flushAll();

      return response.status(200).json(name);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getUsers(request, response) {
    try {
      const page = parseInt(request.query.page) || 1;
      const limit = parseInt(request.query.take) || 5;
      const ativo = request.query.ativo;
      const offset = (page - 1) * limit;

      // Criar uma chave de cache baseada nos parâmetros de consulta
      const cacheKey = `users-all`;

      // Verificar se os dados já estão no cache
      let cachedData = usersCache.get(cacheKey);
      if (!cachedData) {
        const users = await UsersRepository.getUsers(limit, offset, ativo);
        cachedData = {
          users: users.users,
          totalDeUsuarios: users.totalDeUsuarios,
        };

        // Armazenar no cache
        usersCache.set(cacheKey, cachedData);
      } else {
        const users = await UsersRepository.getUsers(limit, offset, ativo);
        cachedData = {
          users: users.users,
          totalDeUsuarios: users.totalDeUsuarios,
        };

        // Armazenar no cache
        usersCache.set(cacheKey, cachedData);
      }

      return response.status(200).json(cachedData);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getUser(request, response) {
    try {
      const userId = request.query.IDUSUARIO;
      let user = userCache.get(userId);

      if (!user) {
        user = await UsersRepository.getUser(userId);
        userCache.set(userId, user);
      }

      return response.status(200).json(...user);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async updateUser(request, response) {
    const { USUARIO, CPF, EMAIL, ATIVO, IDUSUARIOREQ } = request.body;

    try {
      await UsersRepository.updateUser(
        USUARIO,
        CPF,
        EMAIL,
        ATIVO,
        IDUSUARIOREQ,
        response
      );

      // Limpar o cache específico do usuário
      userCache.del(IDUSUARIOREQ);

      // Limpar o cache universal
      usersCache.flushAll();

      return response.status(200).json();
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async logout(req, res) {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
        return res.status(401).json({ message: 'Nenhum token disponível' });
      }

      addToBlacklist(token);
      res
        .status(200)
        .json({ message: 'Desconectado(a) do sistema com sucesso' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Erro ao sair do sistema' });
    }
  }
}

module.exports = new UsersController();
