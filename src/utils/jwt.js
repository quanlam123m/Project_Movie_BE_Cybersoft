const jwt = require("jsonwebtoken");
const config = require("../config");

const EXPIRES_IN = 60 * 60 * 24; //liệt kê theo giây

const generateToken = (user) => {
  const payload = {
    id: user.id,
    role: user.role,
    email: user.email,
  };

  const token = jwt.sign(payload, config.secret_key, {
    //   Thời hạn sử dụng của token
    expiresIn: EXPIRES_IN,
  });

  return {
    token,
    expiresIn: EXPIRES_IN,
  };
};

module.exports = {
  generateToken,
};
