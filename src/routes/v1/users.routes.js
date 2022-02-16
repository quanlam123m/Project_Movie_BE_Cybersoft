const express = require("express");
const userControllers = require("../../controllers/users.controllers");
const { authenticate, authorize } = require("../../middlewares/authentication");

//url: api/v1/users
const userRouter = express.Router();

/**
 * API Get Users
 * Method: GET
 * url: http://localhost:8080/api/v1/users
 */
userRouter.get("/", authenticate, authorize("Admin"), userControllers.getUsers);

/**
 * API Get Users by ID
 * Method: GET
 * url: http://localhost:8080/api/v1/users/:id
 */
userRouter.get(
  "/:id",
  authenticate,
  authorize("Admin"),
  userControllers.getUsersById
);

/**
 * API Create User
 * Method: POST
 * url: http://localhost:8080/api/v1/users
 */
userRouter.post(
  "/",
  authenticate,
  authorize("Admin"),
  userControllers.createUser
);

/**
 * API Update User
 * Method: PUT
 * url: http://localhost:8080/api/v1/users/:id
 */
userRouter.put(
  "/:id",
  authenticate,
  authorize("Admin"),
  userControllers.updateUser
);
/**
 * API DELETE User
 * Method: DELETE
 * url: http://localhost:8080/api/v1/users/:id
 */
userRouter.delete(
  "/:id",
  authenticate,
  authorize("Admin"),
  userControllers.deleteUser
);

module.exports = userRouter;
