import { check, body } from "express-validator";
import { validarRequest } from "./common/validarRequest.js";
import { validacionesPatch } from "./common/validacionesPatch.js";
import { validacionesPost } from "./common/validacionesPost.js";
import { validacionesPut } from "./common/validacionesPut.js";
import { estados } from "../utils/valores.js";
import Productora from "../models/Productora.js";

const validarProductoraBodyPatch = [
  check('nombre', 'nombre requerido')
    .if(body('nombre').exists())
    .notEmpty(),
  check('estado', 'estado no valido')
    .if(body('estado').exists())
    .isIn(estados),
  check('slogan', 'slogan requerido')
    .if(body('slogan').exists())
    .notEmpty(),
  check('descripcion', 'descripcion requerida')
    .if(body('descripcion').exists())
    .notEmpty(),
]

const validarProductoraBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('estado', 'estado no valido').isIn(estados),
  check('slogan', 'slogan requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty(),
]

export const validacionesPatchProductora = validarRequest(
  validacionesPatch(validarProductoraBodyPatch, Productora)
)

export const validacionesPostProductora = validarRequest(
  validacionesPost(validarProductoraBody)
)

export const validacionesPutProductora = validarRequest(
  validacionesPut(validarProductoraBody)
)