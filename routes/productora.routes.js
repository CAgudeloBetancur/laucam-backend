import { Router } from "express";
const productoraRouter = Router();
// Handlers
import crearProductoraHandler from "../handlers/productoraHandlers/crearProductoraHandler.js";
import editarProductoraHandler from "../handlers/productoraHandlers/editarProductoraHandler.js";
import editarParcialProductoraHandler from "../handlers/productoraHandlers/editarParcialProductoraHandler.js";
import eliminarProductoraHandler from "../handlers/productoraHandlers/eliminarProductoraHandler.js";
import listarProductoraHandler from "../handlers/productoraHandlers/listarProductoraHandler.js";
import obtenerProductoraPorIdHandler from "../handlers/productoraHandlers/obtenerProductoraPorIdHandler.js";
// Middlewares
import { 
  validacionesPatchProductora, 
  validacionesPostProductora, 
  validacionesPutProductora } 
  from "../middlewares/rutaProductoraMiddlewares.js";
import { validarParametroId } from "../middlewares/common/validarParametroId.js";

// Rutas

// Crear productora
productoraRouter.post("/", validacionesPostProductora, crearProductoraHandler);
// Listar Productora
productoraRouter.get("/lista", listarProductoraHandler);
// Eliminar Productora por id
productoraRouter.delete("/:id", validarParametroId, eliminarProductoraHandler);
// Editar Productora (completa)
productoraRouter.put("/:id", validacionesPutProductora, editarProductoraHandler);
// Editar Productora (parcial)
productoraRouter.patch("/:id", validacionesPatchProductora, editarParcialProductoraHandler);
// Obtener Productora por id
productoraRouter.get("/:id", validarParametroId, obtenerProductoraPorIdHandler);

export default productoraRouter;