import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";

const app = express();

app.get("/api/product", getAllProducts);
app.get("/api/product/:id", getProductById);
app.post("/api/product", createProduct);
app.put("/api/product/:id", updateProduct);
app.delete("/api/product/:id", deleteProduct);

export default app;
