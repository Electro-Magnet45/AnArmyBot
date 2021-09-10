const express = require("express");
const cors = require("cors");
const { runBotFunc, sendMessageFunc } = require("./index");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: [process.env.WEBSITE_1_URL, process.env.WEBSITE_2_URL],
  })
);
app.use(express.json());

app.get("/", (req, res) => res.send("Hi"));

app.post(process.env.API_URL, (req, res) => {
  const message = req.body.message;
  sendMessageFunc(message).then(() => {
    res.status(200).send("Message Sent");
  });
});

app.listen("5000", () => {
  runBotFunc();
  console.log("server running");
});
