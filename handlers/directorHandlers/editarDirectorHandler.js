import { validationResult } from "express-validator";
import editarDirector from "../../controllers/directorControllers/editarDirector.js";

const editarDirectorHandler = async (req, res) => {
  try {
    const srcDirector = req.body;
    const {id} = req.params;
    const directorActualizado = await editarDirector(srcDirector, id);
    if(!directorActualizado) return res.status(400).json({error: "Director inexistente"});
    return res.status(200).json(directorActualizado);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default editarDirectorHandler;