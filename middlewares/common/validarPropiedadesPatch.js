import { body } from "express-validator";

export const validarPropiedadesPatch = (modelo) => {
  return [
    body('')
      .custom(async (value, {req}) => {
        const nombreModelo = modelo.modelName;
        const instancia = new modelo();
        const propiedadesInvalidas = [];
        for(let propiedad in req.body) {
          if(!(propiedad in instancia)) propiedadesInvalidas.push(propiedad)
        }
        if(propiedadesInvalidas.length > 0) {
          throw new Error(`La(s) propiedad(es) [ ${propiedadesInvalidas.join(', ')} ] no existe(n) en el modelo ${nombreModelo}`);
        }
      })
  ]
} 
