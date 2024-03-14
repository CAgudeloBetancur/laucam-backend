import {Schema, model} from "mongoose";

const DirectorSchema = Schema({
    nombre: {
        type: String, 
        required: true,
    },
    estado: {
        type: String, 
        required: true,
        enum: ["Activo", "Inactivo"]
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