import Genero from "../../models/Genero.js"

const listarGeneros = async () => {
  const generos = await Genero.find();
  return generos;
}

export default listarGeneros;