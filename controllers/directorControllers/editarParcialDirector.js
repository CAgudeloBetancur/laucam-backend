import Director from "../../models/Director.js";

const editarParcialDirector = async (propiedades, id) => {
  propiedades.fechaActualizacion = new Date();
  let result = await Director.findByIdAndUpdate(id, propiedades, {new: true});
  return result;
}

export default editarParcialDirector;