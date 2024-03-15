import { validationResult } from "express-validator";
import eliminarTipo from "../../controllers/tipoControllers/eliminarTipo.js";

const eliminarTipoHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    const {id} = req.params;
    const result = await eliminarTipo(id);
    if(!result.deleted) return res.status(400).json({error: "Tipo inexistente"});
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default eliminarTipoHandler;