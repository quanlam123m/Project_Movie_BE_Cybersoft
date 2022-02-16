const { Cinema, Cineplex } = require("../models");

const getCineplexList = async (req, res) => {
  try {
    const cineplex = await Cineplex.findAll({
      include: [{ model: Cinema, as: "cinemas" }],
    });
    res.status(200).json(200, cineplex);
  } catch (error) {
    res.status(500).json(500, "Internal server error");
  }
};

const getCineplexById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  try {
    const cineplex = await Cineplex.findByPk(id);
    if (cineplex) {
      res.status(200).json(200, cineplex);
    }
    res.status(200).json(400, "Cineplex not found");
  } catch (error) {
    console.log(error);
  }
};

const createCineplex = async (req, res) => {
  const { name, logo } = req.body;
  try {
    const cineplex = await Cineplex.create({
      name,
      logo,
    });
    res.json(201, cineplex.id);
  } catch (error) {
    if ((err.name = "SequelizeValidationError")) {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

const deleteCineplex = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  try {
    const cineplex = await Cineplex.findByPk(id);
    if (!cineplex) {
      res.status(400).json(400, "Cineplex not found");
    }
    await Cineplex.destroy({ where: { id } });
    res.status(200).json(200, "Delete Successfully");
  } catch (error) {
    console.log(error);
  }
};

const updateCineplex = async (req, res) => {
  const id = Number(req.params.id);
  const { name, logo } = req.body;

  if (!id) {
    res.status(400).json(400, "Invalid request");
  }
  const newCineplex = { name, name, logo };

  try {
    await Cineplex.update(newCineplex, {
      where: {
        id,
      },
    });
    res.status(200).json(200, { ...newCineplex, id });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(400).json(400, error.errors);
    }
  }
};

module.exports = {
  getCineplexList,
  getCineplexById,
  createCineplex,
  deleteCineplex,
  updateCineplex,
};
