import crearTipo from "../../controllers/tipoControllers/crearTipo.js";

const crearTipoHandler = async (req, res) => {
    try {
        const srcTipo = req.body;
        const nuevoTipo = await crearTipo(srcTipo);
        return res.status(200).json(nuevoTipo)
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "ocurrio un error"
        });        
    }
} 

export default crearTipoHandler;
