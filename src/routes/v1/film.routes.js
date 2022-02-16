const express = require("express");
const filmsController = require("../../controllers/film.controller");
const { authenticate, authorize } = require("../../middlewares/authentication");
const filmRouter = express.Router();

/**
 * API Get films
 * Method: Get
 * url: http://localhost:8080/api/v1/films
 */
filmRouter.get("/", filmsController.getFilmsList);

/**
 * API Get films by Id
 * Method: Get
 * url: http://localhost:8080/api/v1/films/:id
 */
filmRouter.get("/:id", filmsController.getFilmsById);

/**
 * API Create films
 * Method: Post
 * url: http://localhost:8080/api/v1/films
 */
filmRouter.post(
  "/",
  authenticate,
  authorize("Admin"),
  filmsController.createFilms
);

/**
 * API Delete films
 * Method: Delete
 * url: http://localhost:8080/api/v1/films/:id
 */
filmRouter.delete(
  "/:id",
  // authenticate,
  // authorize("Admin"),
  filmsController.deleteFilms
);

/**
 * API Update films
 * Method: Put
 * url: http://localhost:8080/api/v1/films/:id
 */
filmRouter.put(
  "/:id",
  // authenticate,
  // authorize("Admin"),
  filmsController.updateFilms
);

module.exports = filmRouter;
