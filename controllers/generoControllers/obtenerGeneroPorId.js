import Genero from "../../models/Genero.js";

const obtenerGeneroPorId = async (id) => {
  const genero = await Genero.findById(id);
  return genero;
}

export default obtenerGeneroPorId;