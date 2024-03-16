import { check, body } from "express-validator";
import { validarRequest } from "./common/validarRequest.js";
import { validacionesPatch } from "./common/validacionesPatch.js";
import { validacionesPost } from "./common/validacionesPost.js";
import { validacionesPut } from "./common/validacionesPut.js";
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

export const validacionesPatchGenero = validarRequest(
  validacionesPatch(validarGeneroBodyPatch, Genero)
);

export const validacionesPostGenero = validarRequest(
  validacionesPost(validarGeneroBody)
);

export const validacionesPutGenero = validarRequest(
  validacionesPut(validarGeneroBody)
);