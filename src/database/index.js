const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'db_itaka',
});

exports.query = async (query, values) => {
  const connection = await pool.getConnection();
  const [rows] = await connection.execute(query, values);
  connection.release();
  return rows;
};
