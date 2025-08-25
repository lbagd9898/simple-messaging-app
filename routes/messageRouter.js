const { Router } = require("express");
const msgRouter = Router();
const msgController = require("../controllers/msgsController");

msgRouter.get("/", msgController.getMsgs);
msgRouter.get("/message", msgController.getMsgDetails);

module.exports = msgRouter;
