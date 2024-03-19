import { merge } from "object-mapper";
import Productora from "../../models/Productora.js";

const crearProductora = async (srcProductora) => {
    let productoraVacio = new Productora();
    let productora = merge(srcProductora, productoraVacio, {
        "nombre" : "nombre",
        "estado": "estado",
        "slogan": "slogan",
        "descripcion": "descripcion",
        
    });

    productora.fechaCreacion = new Date();
    productora.fechaActualizacion = new Date();
    productora = await productora.save();
    return productora;
  }
  
  export default crearProductora;