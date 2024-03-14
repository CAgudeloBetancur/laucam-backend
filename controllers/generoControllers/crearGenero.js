import Genero from "./../../models/Genero.js";
import merge from "object-mapper";

const crearGenero = async (srcGenero) => {
  let generoVacio = new Genero();
  let genero = merge(srcGenero, generoVacio, {
    "nombre": "nombre",
    "estado": "estado",
    "descripcion": "descripcion"
  });
  genero = await genero.save();
  return genero;
}

export default crearGenero;