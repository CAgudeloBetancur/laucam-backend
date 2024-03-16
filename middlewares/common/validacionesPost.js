import { validarBodyVacio } from "./validarBodyVacio.js";

export const validacionesPost = (validarBody) => {
  return [
    ...validarBodyVacio,
    ...validarBody
  ]
}