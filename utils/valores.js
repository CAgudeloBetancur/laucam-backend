import { ATLAS_APP_NAME, ATLAS_PASSWORD, ATLAS_USER, DB_NAME } from "../config.js";

// Valores aceptados en propiedad "estado" en modelos
export const estados = ['Activo', 'Inactivo'];

// Url de conexión para mongoose & mongo atlas
export const ATLAS_URL = `mongodb://${ATLAS_USER}:${ATLAS_PASSWORD}@ac-fvifizb-shard-00-00.rs344pt.mongodb.net:27017,ac-fvifizb-shard-00-01.rs344pt.mongodb.net:27017,ac-fvifizb-shard-00-02.rs344pt.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=atlas-d9x873-shard-0&authSource=admin&retryWrites=true&w=majority&appName=${ATLAS_APP_NAME}`;