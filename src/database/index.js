const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'db_itaka',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

exports.query = async (query, values) => {
  const connection = await pool.getConnection();
  const [rows] = await connection.execute(query, values);
  connection.release();
  return rows;
};
