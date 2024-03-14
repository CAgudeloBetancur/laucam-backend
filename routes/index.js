import { Router } from "express";
import tipoRouter from "./tipo.routes.js";

const router = Router();

router.use("/tipo", tipoRouter);

export default router;