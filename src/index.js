import express from "express";
import routerHome from "./routes/home.routes.js";
import routerAuth from "./routes/auth.routes.js";
import routerProduct from "./routes/product.routes.js";
import dotenv from "dotenv";
import sequelize from "./dataBase/config/database.js";
import cors from "cors";
import { initializeData } from "./dataBase/config/initData.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(routerHome);
app.use(routerAuth);
app.use(routerProduct);

const syncDatabaseAndStartServer = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Base de datos sincronizada");

    await initializeData();

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error al sincronizar la base de datos", err);
  }
};

syncDatabaseAndStartServer();
