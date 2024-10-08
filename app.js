const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const newRouter = require("./routes/new");
const indexRouter = require("./routes/index");
const messageRouter = require("./routes/message");

app.use("/new", newRouter);
app.use("/", indexRouter);
app.use("/messages", messageRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
