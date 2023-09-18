const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
    });

// interpret incoming data as text
conn.setEncoding("utf8");

const timedOut = () => {
  console.log("you ded cuz you idled");
  conn.end();
};

let timeOutNum = setTimeout(timedOut, 2000);

conn.on("connect", () => {
  console.log("Connected!");
});

return conn;
};

console.log("Connecting...");
connect();