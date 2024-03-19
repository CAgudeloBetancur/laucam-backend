import Productora from "../../models/Productora.js";

const obtenerProductoraPorId = async (id) => {
  const productora = await Productora.findById(id);
  return productora;
}

export default obtenerProductoraPorId;