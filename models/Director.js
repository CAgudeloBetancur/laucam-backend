import { estados } from "../utils/valores.js";
import {Schema, model} from "mongoose";

const DirectorSchema = Schema({
    nombre: {
        type: String, 
        required: true,
    },
    estado: {
        type: String, 
        required: true,
        enum: estados
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

export default model("Director", DirectorSchema);