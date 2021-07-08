const express = require("express");
const socket = require("socket.io");

const app = express();

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("new user connected: " + socket.id);
});
