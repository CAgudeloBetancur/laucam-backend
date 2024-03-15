// Router
import { Router } from "express";
const generoRouter = Router();

// Handlers
import crearGeneroHandler from "./../handlers/generoHandlers/crearGeneroHandler.js";
import listarGenerosHandler from "../handlers/generoHandlers/listarGenerosHandler.js";
import eliminarGeneroHandler from "../handlers/generoHandlers/eliminarGeneroHandler.js";
import obtenerGeneroPorIdHandler from "../handlers/generoHandlers/obtenerGeneroPorIdHandler.js";
import editarGeneroHandler from "../handlers/generoHandlers/editarGeneroHandler.js";
import editarParcialGeneroHandler from "../handlers/generoHandlers/editarParcialGeneroHandler.js";

// Middlewares
import { validarParametroId } from "../middlewares/common/validarParametroId.js";
import { 
  validacionesPatchGenero, 
  validacionesPostGenero, 
  validacionesPutGenero } 
  from "../middlewares/rutaGeneroMiddlewares.js";

// Rutas

// Crear Genero
generoRouter.post("/", validacionesPostGenero ,crearGeneroHandler);
// Listar Generos
generoRouter.get("/lista", listarGenerosHandler);
// Eliminar Genero por id
generoRouter.delete("/:id", validarParametroId, eliminarGeneroHandler);
// Obtener Genero por id
generoRouter.get("/:id", validarParametroId,obtenerGeneroPorIdHandler);
// Editar Genero (Completo)
generoRouter.put("/:id", validacionesPutGenero, editarGeneroHandler);
// Editar Genero (Parcial)
generoRouter.patch("/:id", validacionesPatchGenero, editarParcialGeneroHandler);

export default generoRouter;