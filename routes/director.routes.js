// Router
import { Router } from "express";
const directorRouter = Router();
// Handlers
import crearDirectorHandler from "../handlers/directorHandlers/crearDirectorHandler.js";
import listarDirectoresHandler from "../handlers/directorHandlers/listarDirectoresHandler.js";
import eliminarDirectorHandler from "../handlers/directorHandlers/eliminarDirectorHandler.js";
import obtenerDirectorPorIdHandler from "../handlers/directorHandlers/obtenerDirectorPorIdHandler.js";
import editarDirectorHandler from "../handlers/directorHandlers/editarDirectorHandler.js";
import editarParcialDirectorHandler from "../handlers/directorHandlers/editarParcialDirectorHandler.js";
// Middlewares
import { 
  validacionesPatchDirector, 
  validacionesPostDirector, 
  validacionesPutDirector } 
  from "../middlewares/rutaDirectorMiddlewares.js";
import { 
  validarParametroId } 
  from "../middlewares/common/validarParametroId.js";

// Rutas

// Crear Director
directorRouter.post("/", validacionesPostDirector,crearDirectorHandler);
// Listar Directores
directorRouter.get("/lista", listarDirectoresHandler);
// Eliminar Director por id
directorRouter.delete("/:id", validarParametroId, eliminarDirectorHandler);
// Obtener Director por id
directorRouter.get("/:id", validarParametroId,obtenerDirectorPorIdHandler);
// Editar Director (completo)
directorRouter.put("/:id", validacionesPutDirector ,editarDirectorHandler);
// Editar Director (parcial)
directorRouter.patch("/:id", validacionesPatchDirector,editarParcialDirectorHandler);

export default directorRouter;