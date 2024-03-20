import Media from "../../models/Media.js";

const editarParcialMedia = async (propiedades, id) => {
  propiedades.fechaActualizacion = new Date();
  let result = await Media.findByIdAndUpdate(id, propiedades, {new: true});
  return result;
}

export default editarParcialMedia;