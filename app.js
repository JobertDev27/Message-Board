import path from "node:path";
import express from "express";
import indexRouter from "./routes/indexRouter.js";
import postRouter from "./routes/postRouter.js";
import messageRouter from "./routes/messageRouter.js";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetPath = path.join(__dirname, "public");

app.use(express.static(assetPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", postRouter);
app.use("/messages", messageRouter);

app.listen(PORT);
