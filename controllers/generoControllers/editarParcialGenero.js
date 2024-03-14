import Genero from "../../models/Genero.js";

const editarParcialGenero = async (propiedades, id) => {
  let result = await Genero.findByIdAndUpdate(id, propiedades, {new: true});
  return result;
}

export default editarParcialGenero;