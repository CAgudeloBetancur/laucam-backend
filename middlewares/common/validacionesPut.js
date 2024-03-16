import { validarBodyVacio } from "./validarBodyVacio.js";
import { validarParametroId } from "./validarParametroId.js";

export const validacionesPut = (validacionesBody) => {
  return [
    ...validarBodyVacio,
    ...validarParametroId,
    ...validacionesBody
  ]
}