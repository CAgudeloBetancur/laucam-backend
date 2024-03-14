import {Schema, model} from "mongoose";

const MediaSchema = Schema({
    serial: {
        type: String,
        required: true,
        unique: true,
    },
    titulo: {
        type: String,
        required: true,
    },  
    sinopsis: {
        type: String,
        required: true,
    },  
    urlPelicula: {
        type: String,
        required: true,
    },  
    urlImagen: {
        type: String,
        required: true,
    }, 
    fechaEstreno: {
        type: Date,
        required: true,
    },
    generoPrincipal: {
        type: Schema.Types.ObjectId,
        ref: "Genero",
        required: true,
    },
    directorPrincipal: {
        type: Schema.Types.ObjectId,
        ref: "Director",
        required: true,
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: "Productora",
        required: true,
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: "Tipo",
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

export default model("Media", MediaSchema);