import { validationResult } from "express-validator";
import editarParcialProductora from "../../controllers/productoraControllers/editarParcialProductora.js";

const editarParcialProductoraHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(200).json({error: errors.array()});
    const {id} = req.params;
    const propiedades = req.body;
    const result = await editarParcialProductora(propiedades, id);
    if(!result) return res.status(500).json({error: "Productora inexistente"});
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default editarParcialProductoraHandler;