import { validationResult } from "express-validator";
import editarMedia from "../../controllers/mediaControllers/editarMedia.js"

const editarMediaHandler = async (req, res) => {
  try {
    const srcMedia = req.body;
    const {id} = req.params;
    const mediaActualizada = await editarMedia(srcMedia, id);
    if(!mediaActualizada) return res.status(400).json({error: "Media inexistente"});
    return res.status(200).json(mediaActualizada);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default editarMediaHandler;