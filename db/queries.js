const pool = require("./pool");

async function getMessage() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY added DESC"
  );

  console.log(rows);
  return rows;
}

async function insertMessage(content, username, added) {
  await pool.query(
    "INSERT INTO messages (content, username, added) VALUES ($1, $2, $3)",
    [content, username, added]
  );
}

module.exports = {
  getMessage,
  insertMessage,
};
