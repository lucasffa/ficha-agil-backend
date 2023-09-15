const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const UsersRepository = require('../repositories/UsersRepository');
const { validaCPF } = require('./Validators');


class UsersController {
  
  async index(request, response) {
    const { email, password } = request.body;
    try {
      const user = await UsersRepository.signIn(email, password);
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: '1h',
      });
      if (user) {
        return response.status(200).json({ token, user });
      }
    } catch (err) {
      return response.status(401).json(
        err.fatal === true
          ? {
              message:
                'Erro de conexão com o banco de dados, entre em contato com o administrador',
            }
          : { message: 'Usuário ou senha não encontrados' }
      );
    }
  }

  async createUser(request, response) {
    const { name, cpf, email, password } = request.body;
    const createdAt = new Date();
    console.log("Iniciando updateUser");

    if (!validaCPF(cpf)) {
        console.log("CPF inválido. Interrompendo...");
        return response.status(400).send({ message: 'CPF inválido.' });
    }
    
    console.log("CPF válido. Continuando...");
    try {
      await UsersRepository.createUser(name, cpf, email, password, createdAt);
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
      const users = await UsersRepository.getUsers(limit, offset, ativo);
      return response
        .status(200)
        .json({ users: users.users, totalDeUsuarios: users.totalDeUsuarios });
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getUser(request, response) {
    try {
      const user = await UsersRepository.getUser(request.query.IDUSUARIO);
      return response.status(200).json(...user);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async updateUser(request, response) {
    const { USUARIO, CPF, EMAIL, ATIVO, TELEFONE } = request.body;
    

    

    try {
      await UsersRepository.updateUser(USUARIO, CPF, EMAIL, ATIVO);
      return response.status(200).json();
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

}

module.exports = new UsersController();
