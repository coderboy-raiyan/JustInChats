import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import express from "express";
import config from "./config";

const app = express();

app.use(cors({ origin: config.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Server is healthy" });
});

export default app;
