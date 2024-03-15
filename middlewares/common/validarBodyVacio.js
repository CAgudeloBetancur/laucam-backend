import { body } from "express-validator";

export const validarBodyVacio = [
  body()
    .custom((value, { req }) => {
      if (Object.keys(req.body).length === 0) {
        throw new Error('El cuerpo de la solicitud no debe estar vacío');
      }
      return true;
    }),
]