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
        required: true,
        default: new Date(),
    },
    fechaActualizacion: {
        type: Date, 
        required: true,
        default: new Date(),
    }
});

export default model("Director", DirectorSchema);