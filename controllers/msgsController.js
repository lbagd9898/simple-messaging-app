const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

async function getMsgs(req, res) {
  const msgs = await db.getAllMessages();
  console.log("Messages: ", msgs);
  res.render("index.ejs", { messages: msgs });
}

async function getMsgDetails(req, res) {
  try {
    const msgId = req.query.msgId;
    if (!msgId) {
      return res.status(400).send("msgId query parameter is required");
    }

    const result = await db.getMsgById(msgId);

    if (result.rows.length === 0) {
      return res.status(404).send("Message not found");
    }

    res.render("details.ejs", { message: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
}

async function newMsgGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("form.ejs", { messages: messages });
}

const newMsgPost = [
  body("message").trim().isAlpha().withMessage("must be a string"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { user, message } = req.body;
    await db.insertNewMsg(user, message);
    const msgs = await db.getAllMessages();
    res.render("index.ejs", { messages: msgs });
  },
];

module.exports = {
  getMsgs,
  getMsgDetails,
  newMsgPost,
  newMsgGet,
};
