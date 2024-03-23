import { validarBodyVacio } from "./validarBodyVacio.js";
import { validarParametroId } from "./validarParametroId.js";
import { validarPropiedadesPatch } from "./validarPropiedadesPatch.js";

export const validacionesPatch = (validarModeloBodyPatch, modelo) => {

  return [
    ...validarBodyVacio,
    ...validarParametroId,
    ...validarPropiedadesPatch(modelo),
    ...validarModeloBodyPatch
  ]
}