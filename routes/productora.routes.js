import { Router } from "express";
const productoraRouter = Router();
// Handlers
import crearProductoraHandler from "../handlers/productoraHandlers/crearProductoraHandler.js";
import editarProductoraHandler from "../handlers/productoraHandlers/editarProductoraHandler.js";
import editarParcialProductoraHandler from "../handlers/productoraHandlers/editarParcialProductoraHandler.js";
import eliminarProductoraHandler from "../handlers/productoraHandlers/eliminarProductoraHandler.js";
import listarProductoraHandler from "../handlers/productoraHandlers/listarProductoraHandler.js";
import obtenerProductoraPorIdHandler from "../handlers/productoraHandlers/obtenerProductoraPorIdHandler.js";
// Crear productora
productoraRouter.post("/", crearProductoraHandler);

// Editar Productora (completa)
productoraRouter.put("/:id", editarProductoraHandler);

// Editar Productora (parcial)
productoraRouter.patch("/:id", editarParcialProductoraHandler);

// Eliminar Productora por id
productoraRouter.delete("/:id",  eliminarProductoraHandler);

// Listar Productora
productoraRouter.get("/lista", listarProductoraHandler);

// Obtener Productora por id
productoraRouter.get("/:id", obtenerProductoraPorIdHandler);

export default productoraRouter;