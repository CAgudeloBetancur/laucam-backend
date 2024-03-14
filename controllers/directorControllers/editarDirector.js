import { merge } from "object-mapper";
import Director from "../../models/Director.js";

const editarDirector = async (srcDirector, id) => {
  let director = await Director.findById(id);
  if(director !== null) {
    let directorActualizado = merge(srcDirector, director, {
      "nombre": "nombre",
      "estado": "estado"
    });
    directorActualizado.fechaActualizacion = new Date();
    director = await directorActualizado.save();
  }
  return director;
}

export default editarDirector;