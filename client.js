const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
    });

// interpret incoming data as text
conn.setEncoding("utf8");

const name = process.argv.slice(2);
// successful connection anon. function
conn.on("connect", () => {
  console.log("Connected!")
  conn.write("Name: CDS");
//  conn.write("Move: up");
});

// adding a timeOut if a user idles without inputting anything
const timedOut = () => {
  console.log("you ded cuz you idled");
  conn.end();
};

let timeOutNum = setTimeout(timedOut, 2000);

return conn;
  }

module.exports = { connect }