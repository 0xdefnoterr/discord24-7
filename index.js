const keepAlive = require("./server");
require("dotenv").config();
const process = require("process");
const TOKEN = process.env.TOKEN;
const Eris = require("eris");
// Imports npm
console.log(TOKEN);
const client = new Eris(`${TOKEN}`);
let args = process.argv.slice(2)[0];
keepAlive();
client.connect().then(() => {
  console.log("Connected to Discord");
});
