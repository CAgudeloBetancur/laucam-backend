import Director from "../../models/Director.js";

const obtenerDirectorPorId = async (id) => {
  const director = await Director.findById(id);
  return director;
}

export default obtenerDirectorPorId;