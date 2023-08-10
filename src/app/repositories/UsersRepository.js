const pool = require('../../database/index');

class UsersRepository {
  async signIn(email, password) {
    const [rows] = await pool.query(
      'SELECT name FROM users WHERE email = ? AND password = ?',
      [email, password]
    );
    return rows;
  }

  async createUser({ name, cpf, email, password, createdAt }) {
    console.log(name, cpf, email, password, createdAt);
    try {
      const [row] = await pool.query(
        'SELECT cpf_user, name, email FROM users WHERE cpf_user = ?',
        [cpf]
      );
      if (row?.cpf_user === cpf && row?.email === email) {
        throw new Error(
          `O usuário ${row.name} já foi cadastrado, favor cadastrar outro usuário`
        );
      } else {
        const rows = await pool.query(
          'INSERT INTO users (name, email, password, created_at, cpf_user) VALUES (?, ?, ?, ?, ?)',
          [name, email, password, createdAt, cpf]
        );
        return rows;
      }
    } catch (error) {
      throw error;
    }
  }

  async getUsers(limit, offset) {
    try {
      const totalPage = await pool.query('SELECT * FROM users');

      const rows = await pool.query(`
      SELECT name, email, cpf_user, created_at
      FROM users
      ORDER BY name ASC
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
}

module.exports = new UsersRepository();
