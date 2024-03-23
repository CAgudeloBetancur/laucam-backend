import { validationResult } from "express-validator";
import obtenerMediaPorId from "../../controllers/mediaControllers/obtenerMediaPorId.js";

const obtenerMediaPorIdHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    const {id} = req.params;
    const media = await obtenerMediaPorId(id);
    if(!media) return res.status(400).send({error: "Media inexistente"});
    return res.status(200).json(media);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default obtenerMediaPorIdHandler;