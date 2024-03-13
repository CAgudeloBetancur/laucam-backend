import express from "express";
import cors from "cors";
import { getConnection } from "./db/mongodb_conection.js";

const app = express();
const port = 4001;
app.use(cors());
getConnection();
app.use(express.json());
app.listen(port,()=>{ 
    console.log("app en http://localhost:" + port);
});