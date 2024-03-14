import { Router } from "express";
import tipoRouter from "./tipo.routes.js";
import generoRouter from "./genero.routes.js";
import directorRouter from "./director.routes.js";

const router = Router();

router.use("/tipo", tipoRouter);
router.use("/genero", generoRouter);
router.use("/director", directorRouter);

export default router;