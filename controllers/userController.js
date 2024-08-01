const db = require("../db/queries");

async function createMessagePost(req, res) {
  const { messageText, author } = req.body;
  const content = messageText;
  const username = author;
  const added = new Date();

  await db.insertMessage(content, username, added);

  res.redirect("/");
}

async function messagesGet(req, res) {
  const messages = await db.getMessage();

  res.render("index", { messages });
}

async function userMessageGet(req, res) {
  const messageId = parseInt(req.params.id, 10);

  const messages = await db.getMessage();

  const message = messages.find((msg) => msg.id === messageId);

  if (message) {
    res.render("message", {
      user: message.username,
      text: message.content,
      date: message.added,
    });
  }
}

module.exports = {
  createMessagePost,
  messagesGet,
  userMessageGet,
};
