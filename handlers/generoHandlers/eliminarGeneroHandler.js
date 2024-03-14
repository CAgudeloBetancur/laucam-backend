import { validationResult } from "express-validator"
import eliminarGenero from "../../controllers/generoControllers/eliminarGenero.js"

const eliminarGeneroHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    const {id} = req.params;
    const result = await eliminarGenero(id);
    if(!result.deleted) return res.status(400).send({error: "Genero inexistente"});
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default eliminarGeneroHandler;