const express = require("express");
const ticketController = require("../../controllers/ticket.controller");
const ticketRouter = express.Router();

ticketRouter.get("/", ticketController.getTicket);
ticketRouter.post("/", ticketController.createTicket);
module.exports = ticketRouter;
