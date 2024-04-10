import listarMedia from "../../controllers/mediaControllers/listarMedia.js";

const listarMediaHandler = async (req, res) => {
  try {
    const filter = req.query;
    const medias = await listarMedia(filter);
    return res.status(200).json(medias);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});    
  }
}

export default listarMediaHandler;