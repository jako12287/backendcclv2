import express from "express";
import { login } from "../controllers/auth.controller.js";

const app = express();

app.post("/api/auth/login", login);

export default app;
