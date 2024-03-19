import { merge } from "object-mapper";
import Productora from "../../models/Productora.js";

const editarProductora = async (srcProductora, id) => {
    let productora = await Productora.findById(id);
    if (productora !== null){
        let productoraActualizada = merge (srcProductora, productora,{
            "nombre" : "nombre",
            "estado": "estado",
            "slogan": "slogan",
            "descripcion": "descripcion",
        });
        productoraActualizada.fechaActualizacion = new Date();
        productora = await productoraActualizada.save();
    }
    return productora;
}

export default editarProductora;