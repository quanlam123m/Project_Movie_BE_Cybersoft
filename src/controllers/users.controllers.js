const { User } = require("../models");
const { ReS, ReE } = require("../utils/response");

// Controller là lớp đảm nhận vai trò xử lý logic của ứng dụng

const getUsers = async (req, res) => {
  // select tất cả user trong db
  try {
    const users = await User.findAll({
      // getList bỏ qua trường password
      attributes: { exclude: ["password"] },
    });

    res.status(200).json(200, users);
    // res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const getUsersById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }

  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(200, user);
    }
    res.status(200).json(400, "User not found");
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      role,
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

const updateUser = async (req, res) => {
  const id = Number(req.params.id);
  const { firstName, lastName, email } = req.body;

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }

  const newUser = { firstName, lastName, email };

  try {
    await User.update(newUser, {
      where: {
        id,
      },
    });
    res.status(200).json(200, { ...newUser, id });
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    // Console log để debug ở local
    // console.log(err);
  }
};

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(400).json(400, "User not found");
    }
    await User.destroy({ where: { id } });
    res.status(204).json(204, "Ok");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
