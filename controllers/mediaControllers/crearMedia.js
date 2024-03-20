import { merge } from "object-mapper";
import Media from "../../models/Media.js";

const crearMedia = async (srcMedia) => {
  let mediaVacio = new Media();
  let media= merge(srcMedia, mediaVacio, {
    "serial" : "serial",
    "titulo": "titulo",
    "sinopsis": "sinopsis",
    "urlPelicula": "urlPelicula",
    "urlImagen": "urlImagen",
    "fechaEstreno": "fechaEstreno",
    "generoPrincipal._id": "generoPrincipal",
    "directorPrincipal._id": "directorPrincipal",
    "productora._id": "productora",
    "tipo._id": "tipo"
  });

  media.fechaCreacion = new Date();
  media.fechaActualizacion = new Date();
  media = await media.save();
  return media;
}

export default crearMedia;