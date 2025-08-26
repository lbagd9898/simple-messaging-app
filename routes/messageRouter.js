const { Router } = require("express");
const msgRouter = Router();
const msgController = require("../controllers/msgsController");

msgRouter.get("/", msgController.getMsgs);
msgRouter.get("/message", msgController.getMsgDetails);
msgRouter.get("/new", msgController.newMsgGet);
msgRouter.post("/new", msgController.newMsgPost);

module.exports = msgRouter;
