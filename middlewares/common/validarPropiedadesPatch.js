import { body } from "express-validator";

export const validarPropiedadesPatch = (modelo) => {
  return [
    body('')
      .custom(async (value, {req}) => {
        const nombreModelo = modelo.modelName;
        const instancia = new modelo();
        for(let propiedad in req.body) {
          if(!(propiedad in instancia)) {
            throw new Error(`La propiedad ${propiedad} no existe en el modelo ${nombreModelo}`);
          }
        }
      })
  ]
} 
