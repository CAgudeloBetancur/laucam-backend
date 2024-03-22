import { validationResult } from "express-validator";

export const validarRequest = (cadenaValidaciones, responseDetails = {}) => {
  return (req, res, next) => {
    Promise.all(cadenaValidaciones.map( validacion => validacion.run(req) ))
      .then(() => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400)
          .json({ errors: errors.array().map(error => {
              return {
                ...error,
                ...(error.path === 'tipo') ? responseDetails[error.path] : {},
                ...(error.path === 'directorPrincipal') ? responseDetails[error.path] : {},
                ...(error.path === 'productora') ? responseDetails[error.path] : {},
                ...(error.path === 'generoPrincipal') ? responseDetails[error.path] : {},
              }
            }) 
          });
        next();
      })
      .catch(next)
  }
}