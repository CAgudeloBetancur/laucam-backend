import { validationResult } from "express-validator";
import editarGenero from "../../controllers/generoControllers/editarGenero.js";

const editarGeneroHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    const srcGenero = req.body;
    const {id} = req.params;
    const generoActualizado = await editarGenero(srcGenero, id);
    if(!generoActualizado) return res.status(400).json({error: "Genero Inexistente"});
    return res.send(generoActualizado);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default editarGeneroHandler;