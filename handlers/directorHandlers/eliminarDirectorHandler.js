import { validationResult } from "express-validator";
import eliminarDirector from "../../controllers/directorControllers/eliminarDirector.js";

const eliminarDirectorHandler = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await eliminarDirector(id);
    if(!result.deleted) return res.status(400).json({error: "Director inexistente"});
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default eliminarDirectorHandler;