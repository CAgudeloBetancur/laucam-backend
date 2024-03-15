import { validationResult } from "express-validator";
import obtenerTipoPorId from "../../controllers/tipoControllers/obtenerTipoPorId.js"

const obtenerTipoPorIdHandler = async (req, res) => {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
      const {id} = req.params;
      console.log(req.params);
      console.log(id);
      const tipo = await obtenerTipoPorId(id);
      return res.status(200).json(tipo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: "Ha ocurrido un error"});
    }
  }
  
  export default obtenerTipoPorIdHandler;