const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 3000;
const msgRouter = require("./routes/messageRouter");

const { messages, idCounter } = require("./data/messages");

app.use(express.urlencoded({ extended: true }));

app.use("/message", msgRouter);

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form", { messages: messages });
});

app.post("/new", (req, res) => {
  const formData = {
    id: idCounter++,
    text: req.body.message,
    user: req.body.user,
    added: req.requestTime,
  };
  messages.push(formData);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("port connected");
});

module.exports = messages;
