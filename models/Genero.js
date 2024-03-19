import { estados } from "../utils/valores.js";
import {Schema, model} from "mongoose";

const GeneroSchema = Schema({
    nombre: {
        type: String, 
        required: true,
    },
    estado: {
        type: String, 
        required: true,
        enum: estados
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

export default model("Genero", GeneroSchema);