import { body, check } from "express-validator";
import { validarRequest } from "./common/validarRequest.js";
import { validacionesPatch } from "./common/validacionesPatch.js";
import Director from "../models/Director.js";
import Genero from "../models/Genero.js";
import Media from "../models/Media.js";
import Productora from "../models/Productora.js";
import Tipo from "../models/Tipo.js";
import { validacionesPost } from "./common/validacionesPost.js";
import { validacionesPut } from "./common/validacionesPut.js";

const crearMensaje = (tipoMsg, id, propiedad) => { // tipoMsg --> 1 = no existe | 2 = existe, pero Inactivo
  const msgP1 = "El _id"
  const msgP2 = "en la propiedad";
  const msgP3 = "no referencia un elemento existente en la base de datos";
  const msgP4 = "referencia un elemento existente, pero Inactivo; solo se admiten elementos Activos";
  return `${msgP1} ${id} ${msgP2} ${propiedad} ${(tipoMsg === 1) ? msgP3 : msgP4}`;
}

const idValidoParaMongo = (id) => {
  return !(/^[0-9a-fA-F]{24}$/).test(id);
} 

const responseMsg = {
  generoPrincipal: {},
  directorPrincipal: {},
  productora: {},
  tipo: {}
}

const validarFormatoYReferencia = modelo => {
  return async (value, obj) => {
    const prop = obj.path.split('.')[0];
    if (typeof value !== 'object') {
      responseMsg[prop].msgDetail = `${prop} es obligatorio y debe ser un objeto`;
      throw new Error(`La propiedad ${prop} es requerida`);
    }
    if (!value.hasOwnProperty('_id')) {
      responseMsg[prop] = {}
      throw new Error(`La propiedad ${prop} debe tener un _id`);
    }
    if (idValidoParaMongo(value._id)) {
      responseMsg[prop] = {}
      throw new Error('_id debe ser un ID válido de MongoDB');
    }
    const resultado = await modelo.findById({_id: value._id});
    if(!resultado) throw new Error(crearMensaje(1, value._id, prop));
    if(prop !== 'tipo') {
      if(resultado.estado !== 'Activo') throw new Error(crearMensaje(2, value._id, obj.path));
    }
    return true;
  }
}

const validarSerial = modelo => {
  return async (value, {req}) => {
    console.log(value)
    const serialDuplicado = await modelo.findOne({serial: value});    
    const mensajeError = `El serial debe ser único; el valor ${value} ya está registrado`;
    if(req.method === 'PUT' || req.method === 'PATCH') {
      const {id} = req.params;
      if ( idValidoParaMongo(id) ) return;
      const mediaAEditar = await modelo.findById(id);
      if(serialDuplicado && mediaAEditar) {
        if(serialDuplicado.serial !== mediaAEditar.serial) {
          throw new Error(mensajeError)
        }
      }
    } else {
      if(serialDuplicado) {
        throw new Error(mensajeError)
      }      
    }
  }
}

const validarMediaBodyPatch = [
  check('serial', 'serial requerido')
    .if(body('serial').exists())
    .notEmpty()
    .custom(validarSerial(Media)),
  check('titulo', 'titulo requerido')
    .if(body('titulo').exists())  
    .notEmpty(),
  check('sinopsis', 'sinopsis requerida')
    .if(body('sinopsis').exists())
    .notEmpty(),
  check('urlPelicula', 'urlPelicula requerido')
    .if(body('urlPelicula').exists())
    .notEmpty(),
    check('imagen', 'imagen requerido')
    .if(body('imagen').exists())
    .notEmpty(),
  check('fechaEstreno', 'fechaEstreno requerido')
    .if(body('fechaEstreno').exists())
    .notEmpty()
    .isISO8601()
    .withMessage('fechaEstreno debe estar en formato (YYYY-MM-DD) y ser válida'),
  check('generoPrincipal')
    .if(body('generoPrincipal').exists())
    .custom(validarFormatoYReferencia(Genero)),
  check('directorPrincipal')
    .if(body('directorPrincipal').exists())
    .custom(validarFormatoYReferencia(Director)),
  check('productora')
    .if(body('productora').exists())
    .custom(validarFormatoYReferencia(Productora)),
  check('tipo')
    .if(body('tipo').exists())
    .custom(validarFormatoYReferencia(Tipo))
];

const validarMediaBody = [
  check('serial', 'serial requerido')
    .notEmpty()
    .custom(validarSerial(Media)),
  check('titulo', 'titulo requerido')
    .notEmpty(),
  check('sinopsis', 'sinopsis requerida')
    .notEmpty(),
  check('urlPelicula', 'urlPelicula requerido')
    .notEmpty(),
  check('imagen', 'imagen requerido')
    .notEmpty(),
  check('fechaEstreno', 'fechaEstreno requerido')
    .notEmpty()
    .isISO8601()
    .withMessage('fechaEstreno debe estar en formato (YYYY-MM-DD) y ser válida'),
  check('generoPrincipal')
    .custom(validarFormatoYReferencia(Genero)),
  check('directorPrincipal')
    .custom(validarFormatoYReferencia(Director)),
  check('productora')
    .custom(validarFormatoYReferencia(Productora)),
  check('tipo')
    .custom(validarFormatoYReferencia(Tipo))
]

export const validacionesPatchMedia = validarRequest(
  validacionesPatch(validarMediaBodyPatch, Media),
  responseMsg
);

export const validacionesPostMedia = validarRequest(
  validacionesPost(validarMediaBody),
  responseMsg
);

export const validacionesPutMedia = validarRequest(
  validacionesPut(validarMediaBody),
  responseMsg
);