const express = require("express");
const { Router } = require("express");

const messageRouter = express.Router();
const messages = require("../utils/messages");

messageRouter.get("/:user", (req, res) => {
  const messageUser = req.params.user;
  const message = messages.find((msg) => msg.user === messageUser);

  console.log(messages);

  if (message) {
    res.render("message", {
      user: message.user,
      text: message.text,
      date: message.added,
    });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = messageRouter;
