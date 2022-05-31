const server = require("express")();
const port = process.env.PORT || 3000;

server.all("/", (req, res) => {
  res.send("It's UP !!");
});

function keepAlive() {
  server.listen(port, () => {
    console.log("Listening on: " + port);
  });
}

module.exports = keepAlive;
