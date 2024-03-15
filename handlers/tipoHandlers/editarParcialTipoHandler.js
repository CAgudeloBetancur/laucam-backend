import { validationResult } from "express-validator";
import editarParcialTipo from "../../controllers/tipoControllers/editarParcialTipo.js";

const editarParcialTipoHandler = async (req, res) => {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) return res.status(200).json({error: errors.array()});
      const {id} = req.params;
      const propiedades = req.body;
      const result = await editarParcialTipo(propiedades, id);
      if(!result) return res.status(500).json({error: "Tipo inexistente"});
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: "Ha ocurrido un error"});
    }
  }
  
  export default editarParcialTipoHandler;