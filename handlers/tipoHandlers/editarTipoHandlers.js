import { validationResult } from "express-validator";
import editarTipo from "../../controllers/tipoControllers/editarTipo.js"

const editarTipoHandler = async (req, res) => {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
      const srcTipo = req.body;
      const {id} = req.params;
      const tipoActualizado = await editarTipo(srcTipo, id);
      if(!tipoActualizado) return res.status(400).json({error: "Tipo inexistente"});
      return res.status(200).json(tipoActualizado);
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: "Ha ocurrido un error"});
    }
  }
  
  export default editarTipoHandler;