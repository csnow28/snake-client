// this file contains initial configurations and the connection function
const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server, and allows proper display of name
const connect = function() {
  const name = process.argv.slice(2);
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected!");
    conn.write(`Name: ${name}`);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };