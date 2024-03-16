import { check, body } from "express-validator"
import { estados } from "../utils/valores.js";
import { validarRequest } from "./common/validarRequest.js";
import { validacionesPatch } from "./common/validacionesPatch.js";
import { validacionesPost } from "./common/validacionesPost.js";
import Director from "./../models/Director.js";
import { validacionesPut } from "./common/validacionesPut.js";

const validarDirectorBodyPatch = [
  check('nombre', 'nombre requerido')
  .if( body('nombre').exists() )
  .notEmpty(),
  check('estado', 'estado no valido')
  .if( body('estado').exists())
  .isIn(estados)
]

const validarDirectorBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('estado', 'estado no valido').isIn(estados)
];

export const validacionesPatchDirector = validarRequest(
  validacionesPatch(validarDirectorBodyPatch, Director)
);

export const validacionesPostDirector = validarRequest(
  validacionesPost(validarDirectorBody)
)

export const validacionesPutDirector = validarRequest(
  validacionesPut(validarDirectorBody)
)