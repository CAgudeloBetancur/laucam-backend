import listarTipos from "../../controllers/tipoControllers/listarTipos.js";
import Tipo from "../../models/Tipo.js";

const listarTipoHandler = async (req, res) => {
    try {
        const tipos = await listarTipos();
        return res.status(200).json(tipos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "ocurrio un error"
        });
    }
}

export default listarTipoHandler;