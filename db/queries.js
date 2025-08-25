const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMsgById(msgId) {
  const result = await pool.query("SELECT * FROM messages WHERE id = $1", [
    msgId,
  ]);
  return result;
}

module.exports = { getAllMessages, getMsgById };
