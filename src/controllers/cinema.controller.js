const { Cinema, Cineplex } = require("../models");

const getCinemaList = async (req, res) => {
  try {
    const cinemas = await Cinema.findAll({
      include: [{ model: Cineplex, as: "cineplex" }],
    });
    res.status(200).json(200, cinemas);
  } catch (error) {
    res.status(500).json(500, "Internal server error");
  }
};

const getCinemaById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  try {
    const cinema = await Cinema.findByPk(id);
    if (cinema) {
      res.status(200).json(200, cinema);
    }
    res.status(200).json(400, "Cinema not found");
  } catch (error) {
    console.log(error);
  }
};

const createCinema = async (req, res) => {
  const { name, address, img, cineplexId } = req.body;

  try {
    const cinema = await Cinema.create({
      name,
      address,
      img,
      cineplexId,
    });
    res.json(201, cinema.id);
  } catch (err) {
    if ((err.name = "SequelizeValidationError")) {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

const deleteCinema = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  try {
    const cinema = await Cinema.findByPk(id);
    if (!cinema) {
      res.status(400).json(400, "Cinema not found");
    }
    await Cinema.destroy({ where: { id } });
    res.status(200).json(200, "Delete Successfully");
  } catch (error) {
    console.log(error);
  }
};

const updateCinema = async (req, res) => {
  const id = Number(req.params.id);
  const { name, address, cineplexId } = req.body;

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  const newCinemas = { name, address, cineplexId };

  try {
    await Cinema.update(newCinemas, {
      where: {
        id,
      },
    });
    res.status(200).json(200, { ...newCinemas, id });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(400).json(400, error.errors);
    }
  }
};

module.exports = {
  getCinemaList,
  getCinemaById,
  createCinema,
  deleteCinema,
  updateCinema,
};
