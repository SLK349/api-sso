const { connection } = require("../services/database.js");

exports.verifyUserInCompany = function (body, callback) {
  let sql = "SELECT users.*, company.name AS companyName FROM users JOIN company ON users.company_id = company.id WHERE users.email = ?";
  connection.query(sql, [body], callback);
};


