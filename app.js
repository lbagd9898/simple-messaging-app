if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const msgRouter = require("./routes/messageRouter");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", msgRouter);

if (process.env.NODE_ENV === "production") {
  app.set("view cache", true);
}

module.exports = app;
