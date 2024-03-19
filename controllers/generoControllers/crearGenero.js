import Genero from "./../../models/Genero.js";
import merge from "object-mapper";

const crearGenero = async (srcGenero) => {
  let generoVacio = new Genero();
  let genero = merge(srcGenero, generoVacio, {
    "nombre": "nombre",
    "estado": "estado",
    "descripcion": "descripcion"
  });

  genero.fechaCreacion = new Date();
  genero.fechaActualizacion = new Date();
  genero = await genero.save();
  return genero;
}

export default crearGenero;