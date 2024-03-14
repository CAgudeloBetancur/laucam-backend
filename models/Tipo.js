import {Schema, model} from "mongoose";

const TipoSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
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

export default model("Tipo", TipoSchema);