const pool = require('../../database/index');

class UsersRepository {
  async signIn(email, password) {
    const [rows] = await pool.query(
      'SELECT USUARIO FROM USUARIO WHERE EMAIL = ? AND SENHA = ?',
      [email, password]
    );
    return rows;
  }

  async createUser(name, cpf, email, password, createdAt) {
    try {
      const [row] = await pool.query(
        'SELECT CPF, USUARIO, EMAIL FROM USUARIO WHERE CPF = ?',
        [cpf]
      );
      if (row?.CPF === cpf && row?.EMAIL === email) {
        throw new Error(
          `O usuário ${row.USUARIO} já foi cadastrado, favor cadastrar outro usuário`
        );
      } else {
        const rows = await pool.query(
          'INSERT INTO USUARIO (USUARIO, SENHA, EMAIL, CPF, ATIVO) VALUES (?, ?, ?, ?, ?)',
          [name, password, email, cpf, 'S']
        );
        return rows;
      }
    } catch (error) {
      throw error;
    }
  }

  async getUsers(limit, offset, ATIVO) {
    try {
      const totalPage = await pool.query(
        `SELECT IDUSUARIO FROM USUARIO WHERE ATIVO = "${ATIVO}"`
      );

      const rows = await pool.query(`
      SELECT IDUSUARIO, USUARIO, EMAIL, CPF
      FROM USUARIO
      WHERE ATIVO = "${ATIVO}"
      ORDER BY USUARIO ASC
      LIMIT ${limit} OFFSET ${offset} 
      `);
      return {
        users: rows,
        totalDeUsuarios: totalPage?.length,
      };
    } catch (error) {
      throw error;
    }
  }

  async getUser(idUsuario) {
    try {
      const rows = await pool.query(
        `
      SELECT IDUSUARIO, USUARIO, EMAIL, CPF, ATIVO FROM USUARIO WHERE IDUSUARIO = ${idUsuario} `
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(USUARIO, CPF, EMAIL, ATIVO) {
    try {
      await pool.query(
        'UPDATE USUARIO SET EMAIL = ?, CPF = ?, ATIVO = ?, USUARIO = ? WHERE CPF = ?',
        [EMAIL, CPF, ATIVO, USUARIO, CPF]
      );
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UsersRepository();
