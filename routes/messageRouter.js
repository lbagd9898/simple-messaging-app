const { Router } = require("express");
const msgRouter = Router();
const msgController = require("../controllers/msgsController");

msgRouter.get("/", msgController.getMsgs);

module.exports = msgRouter;
