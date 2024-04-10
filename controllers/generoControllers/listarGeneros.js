import Genero from "../../models/Genero.js"

const listarGeneros = async (soloActivos) => {
  const generos = await Genero.find((soloActivos) ? {estado: 'Activo'} : {});
  return generos;
}

export default listarGeneros;