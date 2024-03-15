import Tipo from "../../models/Tipo.js"

const editarParcialTipo = async (propiedades, id) => {
    let result = await Tipo.findByIdAndUpdate(id, propiedades, {new: true});
    return result;
  }
  
  export default editarParcialTipo;