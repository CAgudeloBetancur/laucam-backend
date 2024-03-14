import { Router } from "express";

import crearGeneroHandler from "./../handlers/generoHandlers/crearGeneroHandler.js";
import listarGenerosHandler from "../handlers/generoHandlers/listarGenerosHandler.js";
import eliminarGeneroHandler from "../handlers/generoHandlers/eliminarGeneroHandler.js";
import obtenerGeneroPorIdHandler from "../handlers/generoHandlers/obtenerGeneroPorIdHandler.js";
import editarGeneroHandler from "../handlers/generoHandlers/editarGeneroHandler.js";
import editarParcialGeneroHandler from "../handlers/generoHandlers/editarParcialGeneroHandler.js";

const generoRouter = Router();

// Crear Genero
generoRouter.post("/", crearGeneroHandler);
// Listar Generos
generoRouter.get("/lista", listarGenerosHandler);
// Eliminar Genero por id
generoRouter.delete("/:id", eliminarGeneroHandler);
// Obtener Genero por id
generoRouter.get("/:id", obtenerGeneroPorIdHandler);
// Editar Genero (Completo)
generoRouter.put("/:id", editarGeneroHandler);
// Editar Genero (Parcial)
generoRouter.patch("/:id", editarParcialGeneroHandler);

export default generoRouter;