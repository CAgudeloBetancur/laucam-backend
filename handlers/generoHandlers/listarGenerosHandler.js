import listarGeneros from "./../../controllers/generoControllers/listarGeneros.js";

const listarGenerosHandler = async (req, res) => {
  try{
    const soloActivos = req.query.soloActivos === 'true';
    const generos = await listarGeneros(soloActivos);
    return res.status(200).send(generos);
  }catch(error) {
    console.log(error);
    return res.status(500).send({error: "Ha ocurrido un error"});
  }
}

export default listarGenerosHandler;