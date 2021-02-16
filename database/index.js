const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'moviedatabase'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySql');
  } else {
    console.log('Connected to MySql')
  }
});

module.exports = connection;