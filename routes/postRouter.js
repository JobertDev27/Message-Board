import express from "express";
import messages, { state } from "../messagesDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("newMsg");
});

router.post("/", (req, res) => {
  const messageText = req.body.text;
  const messageUser = req.body.user;
  state.latestId++;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
    id: state.latestId,
  });
  res.redirect("/");
});

export default router;
