import jwt from "jsonwebtoken";
import { secret } from "../../dataBase/config/config.js";

export const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({
      error: {
        es: "Acceso denegado, se requiere un token",
        en: "Access denied, token required",
      },
    });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      error: {
        es: "Token inválido o expirado",
        en: "Invalid or expired token",
      },
    });
  }
};

