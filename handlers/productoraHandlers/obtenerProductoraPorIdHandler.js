import { validationResult } from "express-validator";
import obtenerProductoraPorId from "../../controllers/productoraControllers/obtenerProductoraPorId.js";

const obtenerProductoraPorIdHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    const {id} = req.params;
    const productora = await obtenerProductoraPorId(id);
    if(!productora) return res.status(400).send({error: "Productora inexistente"});
    return res.status(200).json(productora);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default obtenerProductoraPorIdHandler;