import bcrypt from "bcryptjs";
import Employee from "../models/employees.js";
import jwt from "jsonwebtoken";
import { secret } from "../dataBase/config/config.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const adminEmail = "adminccl@ccl.com";
    const adminPassword = "123456";

    const adminExists = await Employee.findOne({
      where: { email: adminEmail },
    });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      await Employee.create({
        email: adminEmail,
        password: hashedPassword,
      });
      console.log("Usuario admin creado automáticamente.");
    }

    const employee = await Employee.findOne({ where: { email } });

    if (!employee) {
      return res.status(404).json({
        error: {
          es: "Revisa tus credenciales",
          en: "Check your credentials",
        },
      });
    }

    const passwordIsValid = await bcrypt.compare(password, employee.password);

    if (!passwordIsValid) {
      return res.status(401).json({
        error: {
          es: "Revisa tus credenciales",
          en: "Check your credentials",
        },
      });
    }

    const token = jwt.sign(
      {
        id: employee.id,
        role: employee.role,
      },
      secret,
      {
        expiresIn: "24h",
      }
    );
    res.json({
      message: {
        es: "Bienvenido Inicio de sesión exitoso",
        en: "Welcome Successful login",
      },
      user: {
        id: employee.id,
        email: employee.email,
      },
      token,
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({
      error: {
        es: "Hubo un error inesperado",
        en: "An unexpected error occurred",
      },
    });
  }
};
