const express = require("express");
const { Router } = require("express");

const messageRouter = express.Router();
const userController = require("../controllers/userController");

messageRouter.get("/:id", userController.userMessageGet);

module.exports = messageRouter;
