const { Client, Intents } = require("discord.js");
require("dotenv").config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const runBotFunc = () => {
  client.on("ready", () => {
    console.log("Running!");
  });

  client.login(process.env.BOT_TOKEN);
};

const sendMessageFunc = (msg) => {
  return client.channels.cache
    .get(process.env.MAIN_CH_ID)
    .send(msg)
    .then(() => {
      return "sent";
    });
};

module.exports = { runBotFunc, sendMessageFunc };
