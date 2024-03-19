import { validationResult } from "express-validator";
import editarProductora from "../../controllers/productoraControllers/editarProductora.js";

const editarProductoraHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    const srcProductora = req.body;
    const {id} = req.params;
    const productoraActualizada = await editarProductora(srcProductora, id);
    if(!productoraActualizada) return res.status(400).json({error: "Productora inexistente"});
    return res.status(200).json(productoraActualizada);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default editarProductoraHandler;