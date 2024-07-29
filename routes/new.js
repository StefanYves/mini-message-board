const express = require("express");
const { Router } = require("express");

const newRouter = express.Router();
const messages = require("../utils/messages");

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newRouter;
