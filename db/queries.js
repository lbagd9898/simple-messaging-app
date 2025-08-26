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

async function insertNewMsg(user, message) {
  const query = `INSERT INTO messages(text, "user", sent_at) VALUES ($1, $2, NOW())`;
  try {
    await pool.query(query, [message, user]);
    console.log("Message inserted successfully!");
  } catch (err) {
    console.log("Error inserting message:", err);
    throw err;
  }
}

module.exports = { getAllMessages, getMsgById, insertNewMsg };
