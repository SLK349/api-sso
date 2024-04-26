const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "secret";
const userModel = require("../models/userModel");
const companyModel = require("../models/companyModel");
exports.authenticate = function (req, res) {
  console.log(req.body);
  companyModel.verifyCompany(req.body.code, function (err, companyResult) {
    if (err) {
      return res.status(500).json(err);
    } else {
      if (!companyResult.length) {
        return res.status(404).json({ success: "false ", message: "Company not found" });
      }

      userModel.verifyUserInCompany(req.body.email, function (err, userResult) {
        if (err) {
          return res.status(500).json(err);
        } else {
          if (!userResult.length) {
            return res.status(404).json({ success: "false ", message: "User not found" });
          }

          let passwordValid = "pwd";

          if (req.body.password === passwordValid) {
            const payload = {
              id: userResult[0].id,
              company: companyResult[0].name,
            };
            const token = jwt.sign(payload, secret, { expiresIn: "24h" });
            return res.status(200).json({ success: "true", message: "User found", token: token });
          } else {
            return res.status(404).json({ success: "false", message: "Invalid credentials" });
          }
        }
      }
      );
    }
  }
  );
};

