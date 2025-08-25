const express = require("express");
const msgRouter = require("./routes/messageRouter");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", msgRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("port connected");
});
