import Productora from "../../models/Productora.js";

const listarProductora = async () => {
  const productoras = await Productora.find();
  return productoras;
}

export default listarProductora;