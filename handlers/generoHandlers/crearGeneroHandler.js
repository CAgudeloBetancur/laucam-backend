import crearGenero from "../../controllers/generoControllers/crearGenero.js";
import { validationResult } from "express-validator";

const crearGeneroHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    const srcGenero = req.body;
    const nuevoGenero = await crearGenero(srcGenero);
    return res.status(200).json(nuevoGenero);
  }catch(error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default crearGeneroHandler;