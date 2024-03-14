import { validationResult } from "express-validator";
import editarParcialGenero from "../../controllers/generoControllers/editarParcialGenero.js";

const editarParcialGeneroHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    const {id} = req.params;
    const propiedades = req.body;
    const result = await editarParcialGenero(propiedades, id);
    if(!result) return res.status(400).json({error: "Genero o propiedades inexistentes"});
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default editarParcialGeneroHandler;