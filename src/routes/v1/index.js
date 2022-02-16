const express = require("express");
const userRouter = require("./users.routes");
const authRouter = require("./auth.routes");
const cinemaRouter = require("./cinema.routes");
const cineplexRouter = require("./cineplex.routes");
const filmRouter = require("./film.routes");
const ticketRouter = require("./ticket.routes");

// url: api/v1
const rootRouter = express.Router();

// Khai báo userRouter
rootRouter.use("/users", userRouter);
// Khai báo authRouter
rootRouter.use("/auth", authRouter);
// Khai báo movieRouter
rootRouter.use("/cinemas", cinemaRouter);
// Khai báo cineplexRouter
rootRouter.use("/cineplex", cineplexRouter);
// Khai báo filmRouter
rootRouter.use("/film", filmRouter);
// Khai báo ticketRouter
rootRouter.use("/ticket", ticketRouter);

module.exports = rootRouter;
