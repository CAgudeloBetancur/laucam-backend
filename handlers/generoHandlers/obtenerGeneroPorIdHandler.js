import { validationResult } from "express-validator";
import obtenerGeneroPorId from "../../controllers/generoControllers/obtenerGeneroPorId.js";

const obtenerGeneroPorIdHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    const {id} = req.params;
    const genero = await obtenerGeneroPorId(id);
    if(!genero) return res.status(400).send({error: "Genero inexistente"});
    return res.status(200).send(genero);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default obtenerGeneroPorIdHandler;