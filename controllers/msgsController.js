const db = require("../db/queries");

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

module.exports = {
  getMsgs,
  getMsgDetails,
};
