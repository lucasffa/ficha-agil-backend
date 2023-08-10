const jwt = require('jsonwebtoken');
const UsersRepository = require('../repositories/UsersRepository');

class UsersController {
  async index(request, response) {
    const { email, password } = request.body;
    try {
      const user = await UsersRepository.signIn(email, password);
      const token = jwt.sign({ userId: user.id }, 'secret', {
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
    try {
      const user = await UsersRepository.createUser({
        name,
        cpf,
        email,
        password,
        createdAt,
      });
      return response.status(200).json(name);
    } catch (err) {
      console.log(err);
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getUsers(request, response) {
    try {
      const page = parseInt(request.query.page) || 1;
      const limit = parseInt(request.query.take) || 5;
      const offset = (page - 1) * limit;
      const users = await UsersRepository.getUsers(limit, offset);
      return response
        .status(200)
        .json({ users: users.users, totalDeUsuarios: users.totalDeUsuarios });
    } catch (err) {
      console.log(err);
      return response.status(401).json({
        message: err.message,
      });
    }
  }
}

module.exports = new UsersController();
