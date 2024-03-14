import { Router } from "express";
import tipoRouter from "./tipo.routes.js";
import generoRouter from "./genero.routes.js";

const router = Router();

router.use("/tipo", tipoRouter);
router.use("/genero", generoRouter);

export default router;