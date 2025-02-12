import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";
import { verifyUser } from "../utils/middlewares/auth.js";

const app = express();

app.get("/api/product", verifyUser, getAllProducts);
app.get("/api/product/:id", verifyUser, getProductById);
app.post("/api/product", verifyUser, createProduct);
app.put("/api/product/:id", verifyUser, updateProduct);
app.delete("/api/product/:id", verifyUser, deleteProduct);

export default app;
