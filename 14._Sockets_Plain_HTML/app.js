import express from "express";
const app = express();

app.use(express.static("public"));

import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);

const io = new Server(server);

// on har default event de rhedder conection, den tager imod socket,
io.on("connection", (socket) => {
  console.log("A socket connected", socket.id);

    socket.on("client-sends-color", (data) => {
    /* socket.broadcast.emit("server-sends-color", data); */
    io.emit("server-sends-color", data);
  });

  socket.on("disconnect", () => {
    console.log("A socket disconnected", socket.id);
  });
});

// vigtigt::
const PORT = process.env.PORT ?? 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));
