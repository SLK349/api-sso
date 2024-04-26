const mysql = require("mysql2");

exports.connection = mysql.createConnection({
  host: "mysql-service",
  user: "movies_db",
  database: "movies_db",
  password: "am_pw",
});
