import mongoose from "mongoose";
import { ATLAS_URL } from "../utils/valores.js";

export const getConnection = async () => {
    try {
        const url = ATLAS_URL;
        await mongoose.connect(url)
        console.log("conectado a mongodb")
    } catch (error) {
        console.log(error);        
    }
    
}