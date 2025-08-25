const db = require("../db/queries");

async function getMsgs(req, res) {
  const msgs = await db.getAllMessages();
  console.log("Messages: ", msgs);
  res.render("index.ejs", { messages: msgs });
}

module.exports = {
  getMsgs,
};
