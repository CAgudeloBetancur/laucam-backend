import Tipo from "./../../models/Tipo.js";

const listarTipos = async () => {
    const tipos = await Tipo.find();
    return tipos;
}

export default listarTipos;