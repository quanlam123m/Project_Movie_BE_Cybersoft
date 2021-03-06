const { User } = require("../models");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    res.status(400).json(400, "Email or password invalid");
  }
  // Password người dùng nhập vào là plaintext
  // Password lưu dưới db đã được hash
  const isMatched = bcrypt.compareSync(password, user.password);

  if (!isMatched) {
    res.status(400).json(400, "Email or password invalid");
  }

  const token = generateToken(user);

  res.status(200).json(200, token);
};

const profile = (req, res) => {
  // Thông tin này ấy từ middleware authenticate
  const user = req.user;
  res.status(200).json(200, user);
};
const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.json(201, user.id);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    // Console log để debug ở local
    console.log(err);
  }
};

module.exports = {
  login,
  profile,
  register,
};
