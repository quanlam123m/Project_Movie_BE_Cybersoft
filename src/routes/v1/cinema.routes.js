const express = require("express");
const cinemaController = require("../../controllers/cinema.controller");
const { authenticate, authorize } = require("../../middlewares/authentication");
//url: api/v1/cinemas
const cinemaRouter = express.Router();

/**
 * API Get Cinema
 * Method: Get
 * url: http://localhost:8080/api/v1/cinemas
 */
cinemaRouter.get("/", cinemaController.getCinemaList);
/**
 * API Get Cinema
 * Method: Get
 * url: http://localhost:8080/api/v1/cinemas
 */
cinemaRouter.get("/:id", cinemaController.getCinemaById);

/**
 * API Create Cinema
 * Method: Post
 * url: http://localhost:8080/api/v1/cinemas
 */
cinemaRouter.post(
  "/",
  authenticate,
  authorize("Admin"),
  cinemaController.createCinema
);

/**
 * API Delete Cinema
 * Method: Delete
 * url: http://localhost:8080/api/v1/cinemas/:id
 */
cinemaRouter.delete(
  "/:id",
  authenticate,
  authorize("Admin"),
  cinemaController.deleteCinema
);

/**
 * API Update Cinema
 * Method: PUT
 * url: http://localhost:8080/api/v1/cinemas/:id
 */
cinemaRouter.put(
  "/:id",
  authenticate,
  authorize("Admin"),
  cinemaController.updateCinema
);

module.exports = cinemaRouter;
