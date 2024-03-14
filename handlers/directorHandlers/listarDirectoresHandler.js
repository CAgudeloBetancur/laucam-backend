import listarDirectores from "../../controllers/directorControllers/listarDirectores.js";

const listarDirectoresHandler = async (req, res) => {
  try {
    const directores = await listarDirectores();
    return res.status(200).send(directores);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});    
  }
}

export default listarDirectoresHandler;