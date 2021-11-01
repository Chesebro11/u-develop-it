const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'J147c14z!',
  database: 'election'
});

module.exports = db;
