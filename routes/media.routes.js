// Router
import { Router } from "express";
const mediaRouter = Router();

// Handlers
import crearMediaHandler from "../handlers/mediaHandlers/crearMediaHandler.js";
import listarMediaHandler from "../handlers/mediaHandlers/listarMediaHandler.js";
import obtenerMediaPorIdHandler from "../handlers/mediaHandlers/obtenerMediaPorIdHandler.js";
import eliminarMediaHandler from "../handlers/mediaHandlers/eliminarMediaHandler.js";
import editarMediaHandler from "../handlers/mediaHandlers/editarMediaHandler.js";
import editarParcialMediaHandler from "../handlers/mediaHandlers/editarParcialMediaHandler.js";

// Middlewares
import { 
    validarParametroId } 
    from "../middlewares/common/validarParametroId.js";
  
//Rutas
// Crear Media
mediaRouter.post("/", crearMediaHandler);
// Listar Media
mediaRouter.get("/lista", listarMediaHandler);
// Obtener Media por id
mediaRouter.get("/:id",obtenerMediaPorIdHandler);
// Eliminar Director por id
mediaRouter.delete("/:id", validarParametroId, eliminarMediaHandler);
// Editar Media (completo)
mediaRouter.put("/:id", editarMediaHandler);
// Editar Media (parcial)
mediaRouter.patch("/:id", editarParcialMediaHandler);

export default mediaRouter;