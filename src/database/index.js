const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

exports.query = async (query, values) => {
  const connection = await pool.getConnection();
  const [rows] = await connection.execute(query, values);
  connection.release();
  return rows;
};
