import { Router } from "express";
import crearTipoHandler from "./../handlers/tipoHandlers/crearTipoHandler.js"
import listarTipoHandler from "./../handlers/tipoHandlers/listarTipoHandler.js"

const tipoRouter = Router();

tipoRouter.post("/", crearTipoHandler);
tipoRouter.get("/lista", listarTipoHandler);

export default tipoRouter;