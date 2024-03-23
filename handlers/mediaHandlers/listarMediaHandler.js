import listarMedia from "../../controllers/mediaControllers/listarMedia.js";

const listarMediaHandler = async (req, res) => {
  try {
    const medias = await listarMedia();
    return res.status(200).send(medias);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});    
  }
}

export default listarMediaHandler;