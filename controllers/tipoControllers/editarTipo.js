import { merge } from "object-mapper";
import Tipo from "../../models/Tipo.js"

const editarTipo = async (srcTipo, id) => {
    let tipo = await Tipo.findById(id);
    if(tipo !== null) {
      let tipoActualizado = merge(srcTipo, tipo, {
        "nombre": "nombre",
        "descripcion": "descripcion"
      });
      tipoActualizado.fechaActualizacion = new Date();
      tipo = await tipoActualizado.save();
    }
    return tipo;
  }
  
  export default editarTipo;