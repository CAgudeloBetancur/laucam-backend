import Tipo from "../../models/Tipo.js"

const obtenerTipoPorId = async (id) => {
    const tipo = await Tipo.findById(id);
    return tipo;
}

export default obtenerTipoPorId;

