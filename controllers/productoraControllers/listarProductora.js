import Productora from "../../models/Productora.js";

const listarProductora = async (soloActivos) => {
  const productoras = await Productora.find((soloActivos) ? {estado: 'Activo'} : {});
  return productoras;
}

export default listarProductora;