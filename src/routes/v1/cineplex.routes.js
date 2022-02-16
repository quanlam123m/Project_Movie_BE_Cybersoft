const express = require("express");
const cineplexController = require("../../controllers/cineplex.controller");
const { authenticate, authorize } = require("../../middlewares/authentication");

const cineplexRouter = express.Router();

/**
 * API Get Cineplex
 * Method: Get
 * url: http://localhost:8080/api/v1/cineplex
 */
cineplexRouter.get("/", cineplexController.getCineplexList);

/**
 * API Get Cineplex by Id
 * Method: Get
 * url: http://localhost:8080/api/v1/cineplex/:id
 */
cineplexRouter.get("/:id", cineplexController.getCineplexById);

/**
 * API Create Cineplex
 * Method: Post
 * url: http://localhost:8080/api/v1/cineplex
 */
cineplexRouter.post(
  "/",
  authenticate,
  authorize("Admin"),
  cineplexController.createCineplex
);

/**
 * API Delete Cineplex
 * Method: Delete
 * url: http://localhost:8080/api/v1/cineplex/:id
 */
cineplexRouter.delete(
  "/:id",
  authenticate,
  authorize("Admin"),
  cineplexController.deleteCineplex
);

/**
 * API Update Cineplex
 * Method: Put
 * url: http://localhost:8080/api/v1/cineplex/:id
 */
cineplexRouter.put(
  "/:id",
  authenticate,
  authorize("Admin"),
  cineplexController.updateCineplex
);

module.exports = cineplexRouter;
