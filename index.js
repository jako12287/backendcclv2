import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, Express!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
