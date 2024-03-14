import { Router } from "express";
const directorRouter = Router();
import crearDirectorHandler from "../handlers/directorHandlers/crearDirectorHandler.js";
import listarDirectoresHandler from "../handlers/directorHandlers/listarDirectoresHandler.js";
import eliminarDirectorHandler from "../handlers/directorHandlers/eliminarDirectorHandler.js";
import obtenerDirectorPorIdHandler from "../handlers/directorHandlers/obtenerDirectorPorIdHandler.js";
import editarDirectorHandler from "../handlers/directorHandlers/editarDirectorHandler.js";
import editarParcialDirectorHandler from "../handlers/directorHandlers/editarParcialDirectorHandler.js";

// Crear Director
directorRouter.post("/", crearDirectorHandler);
// Listar Directores
directorRouter.get("/lista", listarDirectoresHandler);
// Eliminar Director por id
directorRouter.delete("/:id", eliminarDirectorHandler);
// Obtener Director por id
directorRouter.get("/:id", obtenerDirectorPorIdHandler);
// Editar Director (completo)
directorRouter.put("/:id", editarDirectorHandler);
// Editar Director (parcial)
directorRouter.patch("/:id", editarParcialDirectorHandler);

export default directorRouter;