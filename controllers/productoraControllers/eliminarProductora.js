import Productora from "../../models/Productora.js";

const eliminarProductora = async (id) => {
  let productoraEliminada = await Productora.findByIdAndDelete(id);
  return (productoraEliminada !== null) ? {deleted: true} : {deleted: false};
}

export default eliminarProductora;