const { Router } = require("express");
const msgRouter = Router();
const { messages } = require("../data/messages");

msgRouter.get("/", (req, res) => {
  const msgId = req.query.msgId;
  const message = messages.find((m) => m.id === parseInt(msgId));
  res.render("details", { message });
});

module.exports = msgRouter;
