let idCounter = 1;

const messages = [
  { id: idCounter++, text: "whaddup", user: "Lydia", added: new Date() },
  { id: idCounter++, text: "who dis?", user: "Suzanne", added: new Date() },
  { id: idCounter++, text: "aloha", user: "Lydia", added: new Date() },
];

module.exports = { messages, idCounter };
