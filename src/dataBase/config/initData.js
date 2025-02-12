import Product from "../../models/product.js";

export const initializeData = async () => {
  try {
    const products = [
      { name: "Laptop", quantity: 5 },
      { name: "Mouse", quantity: 20 },
      { name: "Teclado", quantity: 15 },
      { name: "Monitor", quantity: 10 },
      { name: "Impresora", quantity: 8 },
      { name: "Auriculares", quantity: 12 },
      { name: "Cámara Web", quantity: 7 },
      { name: "Disco Duro", quantity: 10 },
      { name: "Memoria USB", quantity: 25 },
      { name: "Router WiFi", quantity: 6 },
    ];

    for (const product of products) {
      await Product.findOrCreate({
        where: { name: product.name },
        defaults: { quantity: product.quantity },
      });
    }

    console.log("Datos iniciales cargados correctamente.");
  } catch (error) {
    console.error("Error al inicializar los datos:", error);
  }
};
