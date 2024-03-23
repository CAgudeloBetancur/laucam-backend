import express from "express";
import cors from "cors";
import { getConnection } from "./db/mongodb_conection.js";
import router from "./routes/index.js";
import { BASE_URL, PORT } from "./config.js";

const app = express();
app.use(cors());
getConnection();
app.use(express.json());
app.use("/", router);
app.listen(PORT,()=>{ 
    console.log(`app en ${ BASE_URL }:${PORT}`);
});