const mysql = require('mysql2');

const Conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '//Amaro13579',
  database: 'leitura'
});

module.exports = Conexao;