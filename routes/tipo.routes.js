// Router
import { Router } from "express";
const tipoRouter = Router();
// Handlers
import crearTipoHandler from "./../handlers/tipoHandlers/crearTipoHandler.js"
import listarTipoHandler from "./../handlers/tipoHandlers/listarTipoHandler.js"
import eliminarTipoHandler from "./../handlers/tipoHandlers/eliminarTipoHandler.js"
import obtenerTipoPorIdHandler from "../handlers/tipoHandlers/obtenerTipoPorIdHandler.js";
import editarTipoHandler from "../handlers/tipoHandlers/editarTipoHandlers.js";
import editarParcialTipoHandler from "../handlers/tipoHandlers/editarParcialTipoHandler.js";
// Middlewares
import { 
  validacionesPatchTipo, 
  validacionesPostTipo, 
  validacionesPutTipo } 
  from "../middlewares/rutaTipoMiddlewares.js";
import { 
  validarParametroId } 
  from "../middlewares/common/validarParametroId.js";

// Rutas

// Crar Tipo
tipoRouter.post("/", validacionesPostTipo, crearTipoHandler);
// Listar Tipos
tipoRouter.get("/lista", listarTipoHandler);
// Eliminar Tipo por id
tipoRouter.delete("/:id", validarParametroId, eliminarTipoHandler);
// Obtener Tipo por id
tipoRouter.get("/:id", validarParametroId, obtenerTipoPorIdHandler);
// Editar Tipo (completo)
tipoRouter.put("/:id", validacionesPutTipo,editarTipoHandler);
// Editar Tipo (parcial)
tipoRouter.patch("/:id", validacionesPatchTipo,editarParcialTipoHandler);

export default tipoRouter;