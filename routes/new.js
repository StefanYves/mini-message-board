const express = require("express");
const { Router } = require("express");
const userController = require("../controllers/userController");

const newRouter = express.Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", userController.createMessagePost);

module.exports = newRouter;
