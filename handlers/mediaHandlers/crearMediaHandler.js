import { validationResult } from "express-validator";
import crearMedia from "../../controllers/mediaControllers/crearMedia.js";

const crearMediaHandler = async (req, res) => {
  try {
    const srcMedia = req.body;
    const nuevoMedia= await crearMedia(srcMedia);
    return res.status(200).json(nuevoMedia);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Ha ocurrido un error"});
  }
}

export default crearMediaHandler;