import Director from "../../models/Director.js";

const listarDirectores = async (soloActivos) => {
  const directores = await Director.find((soloActivos) ? {estado: 'Activo'} : {});
  return directores;
}

export default listarDirectores;