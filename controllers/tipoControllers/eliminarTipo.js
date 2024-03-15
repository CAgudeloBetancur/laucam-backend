import Tipo from "./../../models/Tipo.js";

const eliminarTipo = async (id) => {
    let tipoEliminado = await Tipo.findByIdAndDelete(id);
    return (tipoEliminado !== null) ?
    {deleted: true} : {deleted: false};
}

export default eliminarTipo;
