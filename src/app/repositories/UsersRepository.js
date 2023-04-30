const pool = require('../../database/index');

class UsersRepository {
  async signIn(email, password) {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password]
    );
    return rows;
  }
}

module.exports = new UsersRepository();
