import { check, body } from "express-validator";
import { validarRequest } from "./common/validarRequest.js";
import { validacionesPatch } from "./common/validacionesPatch.js";
import { validacionesPost } from "./common/validacionesPost.js";
import { validacionesPut } from "./common/validacionesPut.js";
import Tipo from "../models/Tipo.js";

const validarTipoBodyPatch = [
  check('nombre', 'nombre requerido')
    .if(body('nombre').exists())
    .notEmpty(),
  check('descripcion', 'descripcion requerida')
    .if(body('descripcion').exists())
    .notEmpty()
]

const validarTipoBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty()
]

export const validacionesPatchTipo = validarRequest(
  validacionesPatch(validarTipoBodyPatch, Tipo)
);

export const validacionesPostTipo = validarRequest(
  validacionesPost(validarTipoBody)
);

export const validacionesPutTipo = validarRequest(
  validacionesPut(validarTipoBody)
);