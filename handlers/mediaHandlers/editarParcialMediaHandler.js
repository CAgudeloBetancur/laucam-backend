import { validationResult } from "express-validator";
import editarParcialMedia from "../../controllers/mediaControllers/editarParcialMedia.js";

const editarParcialMediaHandler = async (req, res) => {
  try {
    const {id} = req.params;
    const propiedades = req.body;
    const result = await editarParcialMedia(propiedades, id);
    if(!result) return res.status(500).json({error: "Media inexistente"});
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default editarParcialMediaHandler;