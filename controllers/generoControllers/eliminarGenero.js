import Genero from "../../models/Genero.js";

const eliminarGenero = async (id) => {
  let generoEliminado = await Genero.findByIdAndDelete(id);
  return (generoEliminado !== null) ? {deleted: true} : {deleted: false};
}

export default eliminarGenero;