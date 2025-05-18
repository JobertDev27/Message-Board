import express from "express";
import messages from "../messagesDB.js";

const router = express.Router();

router.get("/:messageIndex", (req, res) => {
  const index = parseInt(req.params.messageIndex, 10);

  res.render("messagePage", { message: messages[Number(index)] });
});

export default router;
