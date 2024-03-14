import { validationResult } from "express-validator";
import crearDirector from "../../controllers/directorControllers/crearDirector.js";

const crearDirectorHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    const srcDirector = req.body;
    const nuevoDirector = await crearDirector(srcDirector);
    return res.status(200).json(nuevoDirector);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default crearDirectorHandler;