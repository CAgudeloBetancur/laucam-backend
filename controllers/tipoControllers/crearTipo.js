import Tipo from "./../../models/Tipo.js";
import merge from "object-mapper";

const crearTipo = async (srcTipo) => {
    let tipoVacio = new Tipo();
    let tipo = merge(srcTipo, tipoVacio, {
        "nombre": "nombre",
        "descripcion": "descripcion"
    }) 
    tipo =  await tipo.save();
    return tipo;          
}

export default crearTipo; 

