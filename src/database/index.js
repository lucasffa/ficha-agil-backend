const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'professorhenrique.com',
  user: 'profess1_itaka',
  password: 'Projetoitaka@123',
  database: 'profess1_itaka',
 
});


exports.query = async (query, values) => {
  const connection = await pool.getConnection();
  const [rows] = await connection.execute(query, values);
  connection.release();
  return rows;
};
