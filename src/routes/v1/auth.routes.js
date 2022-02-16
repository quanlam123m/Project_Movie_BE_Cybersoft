const express = require("express");
const authController = require("../../controllers/auth.controller");
const { authenticate } = require("../../middlewares/authentication");

//url: api/v1/users
const authRouter = express.Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
authRouter.get("/profile", authenticate, authController.profile);

module.exports = authRouter;
