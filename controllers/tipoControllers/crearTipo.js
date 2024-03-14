import Tipo from "./../../models/Tipo.js";

const crearTipo = async (srcTipo) => {
    let tipo = new Tipo();
    tipo.nombre = srcTipo.nombre;        
    tipo.descripcion = srcTipo.descripcion; 
    tipo =  await tipo.save();
    return tipo;          
}

export default crearTipo; 

