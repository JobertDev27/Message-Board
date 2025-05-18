import express from "express";
import messages from "../messagesDB.js";

const router = express.Router();

const link = [
  { href: "/new", text: "create message" },
  { href: "/messages", text: "open message" },
];

router.get("/", (req, res) => {
  res.render("index", { link: link[0], messages: messages, linkTo: link[1] });
});

export default router;
