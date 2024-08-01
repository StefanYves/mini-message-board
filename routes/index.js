const express = require("express");
const { Router } = require("express");

const indexRouter = express.Router();

const userController = require("../controllers/userController");

indexRouter.get("/", userController.messagesGet);

module.exports = indexRouter;
