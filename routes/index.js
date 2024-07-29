const express = require("express");
const { Router } = require("express");

const indexRouter = express.Router();
const messages = require("../utils/messages");

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = indexRouter;
