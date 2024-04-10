import listarProductora from "../../controllers/productoraControllers/listarProductora.js";

const listarProductoraHandler = async (req, res) => {
  try {
    const soloActivos = req.query.soloActivos === 'true';
    const productora = await listarProductora(soloActivos);
    return res.status(200).send(productora);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});    
  }
}

export default listarProductoraHandler;