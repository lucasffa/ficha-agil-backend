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
        return response.status(200).json(token);
      }
    } catch (err) {
      return response
        .status(401)
        .json(
          err.fatal === true
            ? {
                message:
                  'Erro de conexão com o banco de dados, entre em contato com o administrador',
              }
            : { message: 'Usuário ou senha não encontrados' }
        );
    }
  }
}

module.exports = new UsersController();
