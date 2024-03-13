import { log } from "console";
import mongoose from "mongoose";

export const getConnection = async () => {
    try {
        const url = "mongodb://iud_user:RmDJxcmlHfwwjWH1@ac-fvifizb-shard-00-00.rs344pt.mongodb.net:27017,ac-fvifizb-shard-00-01.rs344pt.mongodb.net:27017,ac-fvifizb-shard-00-02.rs344pt.mongodb.net:27017/mofree_db?ssl=true&replicaSet=atlas-d9x873-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Universidad";
        await mongoose.connect(url)
        console.log("conectado a mongodb")
    } catch (error) {
        console.log(error);        
    }
    
}