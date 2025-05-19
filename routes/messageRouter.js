import express from "express";
import messages from "../messagesDB.js";

const router = express.Router();

router.get("/:messageIndex", (req, res) => {
  const id = parseInt(req.params.messageIndex, 10);

  res.render("messagePage", { message: messages.find((msg) => msg.id === id) });
});

export default router;
