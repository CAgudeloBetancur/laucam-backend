import { Router } from "express";
import crearTipoHandler from "./../handlers/tipoHandlers/crearTipoHandler.js"
import listarTipoHandler from "./../handlers/tipoHandlers/listarTipoHandler.js"
import eliminarTipoHandler from "./../handlers/tipoHandlers/eliminarTipoHandler.js"
import obtenerTipoPorIdHandler from "../handlers/tipoHandlers/obtenerTipoPorIdHandler.js";
import editarTipoHandler from "../handlers/tipoHandlers/editarTipoHandlers.js";
import editarParcialTipoHandler from "../handlers/tipoHandlers/editarParcialTipoHandler.js";

const tipoRouter = Router();

tipoRouter.post("/", crearTipoHandler);
tipoRouter.get("/lista", listarTipoHandler);
tipoRouter.delete("/:id",eliminarTipoHandler);
tipoRouter.get("/:id",obtenerTipoPorIdHandler);
tipoRouter.put("/:id",editarTipoHandler);
tipoRouter.patch("/:id",editarParcialTipoHandler);

export default tipoRouter;