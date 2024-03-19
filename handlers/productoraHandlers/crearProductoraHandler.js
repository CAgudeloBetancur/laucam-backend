import crearProductora from "../../controllers/productoraControllers/crearProductora.js"

const crearProductoraHandler = async (req, res) => {
    try {
      const srcProductora = req.body;
      const nuevoProductora = await crearProductora(srcProductora);
      return res.status(200).json(nuevoProductora);
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: "Ha ocurrido un error"});
    }
  }
  
  export default crearProductoraHandler;