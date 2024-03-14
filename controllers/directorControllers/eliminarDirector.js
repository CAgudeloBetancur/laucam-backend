import Director from "../../models/Director.js";

const eliminarDirector = async (id) => {
  let directorEliminado = await Director.findByIdAndDelete(id);
  return (directorEliminado !== null) ? {deleted: true} : {deleted: false};
}

export default eliminarDirector;