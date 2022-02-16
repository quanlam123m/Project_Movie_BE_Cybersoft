const { Ticket } = require("../models");
const getTicket = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.status(200).json(200, tickets);
  } catch (error) {
    res.status(500).json(500, error);
  }
};

const createTicket = async (req, res) => {
  const { showtimes, seats, movie, room, filmsId } = req.body;

  try {
    const ticket = await Ticket.create({
      showtimes,
      seats,
      movie,
      room,
      filmsId,
    });
    res.json(201, ticket.id);
  } catch (error) {
    res.status(500).json(500, error);
  }
};

module.exports = {
  getTicket,
  createTicket,
};
