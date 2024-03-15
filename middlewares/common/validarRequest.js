import { validationResult } from "express-validator";

export const validarRequest = (cadenaValidaciones) => {
  return (req, res, next) => {
    Promise.all(cadenaValidaciones.map( validacion => validacion.run(req) ))
      .then(() => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array().reverse() });
        next();
      })
      .catch(next)
  }
}