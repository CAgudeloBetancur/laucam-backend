import {Schema, model} from "mongoose";

const GeneroSchema = Schema({
    nombre: {
        type: String, 
        required: true,
    },
    estado: {
        type: String, 
        required: true,
        enum: ["Activo", "Inactivo"]
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

export default model("Genero", GeneroSchema);