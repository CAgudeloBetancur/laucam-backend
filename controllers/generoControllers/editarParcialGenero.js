import Genero from "../../models/Genero.js";

const editarParcialGenero = async (propiedades, id) => {
  propiedades.fechaActualizacion = new Date();
  let result = await Genero.findByIdAndUpdate(id, propiedades, {new: true});
  return result;
}

export default editarParcialGenero;