import { merge } from "object-mapper";
import Media from "../../models/Media.js";

const editarMedia = async (srcMedia, id) => {
  let media = await Media.findById(id);
  if(media !== null) {
    let mediaActualizada = merge(srcMedia, media, {
        "serial" : "serial",
        "titulo": "titulo",
        "sinopsis": "sinopsis",
        "urlPelicula": "urlPelicula",
        "imagen": "imagen",
        "fechaEstreno": "fechaEstreno",
        "generoPrincipal._id": "generoPrincipal",
        "directorPrincipal._id": "directorPrincipal",
        "productora._id": "productora",
        "tipo._id": "tipo"
    });
    mediaActualizada.fechaActualizacion = new Date();
    media = await mediaActualizada.save();
  }
  return media;
}

export default editarMedia;