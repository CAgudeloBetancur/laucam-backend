import { merge } from "object-mapper";
import Director from "../../models/Director.js";

const crearDirector = async (srcDirector) => {
  let directorVacio = new Director();
  let director = merge(srcDirector, directorVacio, {
    "nombre" : "nombre",
    "estado": "estado"
  });
  director = await director.save();
  return director;
}

export default crearDirector;