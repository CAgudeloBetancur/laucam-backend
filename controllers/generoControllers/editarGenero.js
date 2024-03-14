import Genero from "../../models/Genero.js";
import { merge } from "object-mapper";

const editarGenero = async (srcGenero, id) => {
  let genero = await Genero.findById(id);
  if(genero !== null) {
    let generoActualizado = merge(srcGenero, genero, {
      "nombre": "nombre",
      "estado": "estado",
      "descripcion": "descripcion"
    });
    generoActualizado.fechaActualizacion = new Date();
    genero = generoActualizado.save();
  }
  return genero;
}

export default editarGenero;