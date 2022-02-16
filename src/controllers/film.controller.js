const { Films, Cinema, CinemaConnectMovie } = require("../models");

const getFilmsList = async (req, res) => {
  try {
    const listFilms = await Films.findAll();
    res.status(200).json(200, listFilms);
  } catch (error) {
    res.status(500).json(500, "Internal server error");
  }
};

const getFilmsById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  try {
    const films = await Films.findByPk(id);
    if (films) {
      res.status(200).json(200, films);
    }
    res.status(200).json(400, "Films not found");
  } catch (error) {
    console.log(error);
  }
};

const createFilms = async (req, res) => {
  const { name, trailer, description, isHot, isNowShowing } = req.body;

  try {
    const films = await Films.create({
      name,
      trailer,
      description,
      isHot,
      isNowShowing,
    });
    res.json(201, "Create Successfully", films);
  } catch (error) {
    if ((err.name = "SequelizeValidationError")) {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

const deleteFilms = async (req, res) => {
  try {
    const { id } = req.params;
    const listCineConnectMovie = await CinemaConnectMovie.findAll({
      where: {
        movieId: id,
      },
    });
    if (listCineConnectMovie.length) {
      res.status(400).json(400, "Can not delete");
    } else {
      await Films.destroy({
        where: {
          id,
        },
      });
      res.status(200).json(200, "Delete successfully");
    }
  } catch (error) {
    res.status(500).json(500, error);
  }
};

const updateFilms = async (req, res) => {
  const id = Number(req.params.id);
  const { name, trailer, description, isHot, isNowShowing } = req.body;

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  const newFilms = { name, trailer, description, isHot, isNowShowing };

  try {
    await Films.update(newFilms, {
      where: {
        id,
      },
    });
    res.status(200).json(200, { ...newFilms, id });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(400).json(400, error.errors);
    }
    res.status(500).send(error);
  }
};

module.exports = {
  getFilmsList,
  getFilmsById,
  createFilms,
  deleteFilms,
  updateFilms,
};
