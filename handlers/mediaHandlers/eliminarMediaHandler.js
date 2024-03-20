import { validationResult } from "express-validator";
import eliminarMedia from "../../controllers/mediaControllers/eliminarMedia.js";

const eliminarMediaHandler = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await eliminarMedia(id);
    if(!result.deleted) return res.status(400).json({error: "Media inexistente"});
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default eliminarMediaHandler;