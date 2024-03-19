import Productora from "../../models/Productora.js";

const editarParcialProductora = async (propiedades, id) => {
  propiedades.fechaActualizacion = new Date();
  let result = await Productora.findByIdAndUpdate(id, propiedades, {new: true});
  return result;
}

export default editarParcialProductora;