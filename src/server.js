import { join } from "path";
import express from "express";
import socketId from "socket.io";

const PORT = "4000";

const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`Server Listening now on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
