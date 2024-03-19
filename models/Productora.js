import { estados } from "../utils/valores.js";
import {Schema, model} from "mongoose";

const ProductoraSchema = Schema({
    nombre: {
        type: String, 
        required: true,
    },
    estado: {
        type: String, 
        required: true,
        enum: estados
    },
    slogan: {
        type: String, 
        required: true,
    },
    descripcion: {
        type: String, 
        required: true,
    },
    fechaCreacion: {
        type: Date, 
        required: true
    },
    fechaActualizacion: {
        type: Date, 
        required: true       
    }
});

export default model("Productora", ProductoraSchema);