import { check, body } from "express-validator";
import { validarRequest } from "./common/validarRequest.js";
import { validarParametroId } from "./common/validarParametroId.js";
import { validarPropiedadesPatch } from "./common/validarPropiedadesPatch.js";
import { validarBodyVacio } from "./common/validarBodyVacio.js";
import { estados } from "../utils/valores.js";
import Genero from "../models/Genero.js";

const validarGeneroBodyPatch = [
  check('nombre', 'nombre requerido')
    .if(body('nombre').exists())
    .notEmpty(),
  check('descripcion', 'descripcion requerida')
    .if(body('descripcion').exists())
    .notEmpty(),
  check('estado', 'estado no valido')
    .if(body('estado').exists())
    .isIn(estados)
];

const validarGeneroBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty(),
  check('estado', 'estado no valido').isIn(estados)
]

const validacionesPatch = [
  ...validarBodyVacio,
  ...validarParametroId, 
  ...validarPropiedadesPatch(Genero),
  ...validarGeneroBodyPatch
];

const validacionesPost = [
  ...validarBodyVacio,
  ...validarGeneroBody
]

const validacionesPut = [
  ...validarBodyVacio,
  ...validarParametroId,
  ...validarGeneroBody
]

export const validacionesPatchGenero = [ validarRequest(validacionesPatch) ];
export const validacionesPostGenero = [ validarRequest(validacionesPost) ];
export const validacionesPutGenero = [ validarRequest(validacionesPut) ];