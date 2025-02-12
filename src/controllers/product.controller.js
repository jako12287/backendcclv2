import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({
      message: {
        es: "Productos obtenidos",
        en: "Products retrieved",
      },
      products,
    });
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({
      message: {
        es: "Hubo un error inesperado",
        en: "An unexpected error occurred",
      },
    });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        message: {
          es: "Producto no encontrado",
          en: "Product not found",
        },
      });
    }
    res.json({
      message: {
        es: "Producto encontrado",
        en: "Product found",
      },
      product,
    });
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    res.status(500).json({
      message: {
        es: "Hubo un error inesperado",
        en: "An unexpected error occurred",
      },
    });
  }
};

export const createProduct = async (req, res) => {
  const { name, quantity } = req.body;
  try {
    const existingProduct = await Product.findOne({ where: { name } });
    if (existingProduct) {
      return res.status(400).json({
        message: {
          es: "Ya existe un producto con este nombre",
          en: "An existing product with this name already exists",
        },
      });
    }
    const newProduct = await Product.create({ name, quantity });
    res.status(201).json({
      message: {
        es: "Producto creado correctamente",
        en: "Product created successfully",
      },
      product: newProduct,
    });
  } catch (error) {
    console.error("Error al crear el producto:", error);
    res.status(500).json({
      message: {
        es: "Hubo un error inesperado",
        en: "An unexpected error occurred",
      },
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        message: { es: "Producto no encontrado", en: "Product not found" },
      });
    }
    await product.update({ name, quantity });
    res.json({
      message: {
        es: "Producto actualizado correctamente",
        en: "Product updated successfully",
      },
      product,
    });
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    res.status(500).json({
      message: {
        es: "Hubo un error inesperado",
        en: "An unexpected error occurred",
      },
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        message: { es: "Producto no encontrado", en: "Product not found" },
      });
    }
    await product.destroy();
    res.json({
      message: {
        es: "Producto eliminado correctamente",
        en: "Product deleted successfully",
      },
    });
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    res.status(500).json({
      message: {
        es: "Hubo un error inesperado",
        en: "An unexpected error occurred",
      },
    });
  }
};
