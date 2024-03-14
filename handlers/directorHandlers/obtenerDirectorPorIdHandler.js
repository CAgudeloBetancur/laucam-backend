import { validationResult } from "express-validator";
import obtenerDirectorPorId from "../../controllers/directorControllers/obtenerDirectorPorId.js";

const obtenerDirectorPorIdHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    const {id} = req.params;
    const director = await obtenerDirectorPorId(id);
    return res.status(200).json(director);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default obtenerDirectorPorIdHandler;