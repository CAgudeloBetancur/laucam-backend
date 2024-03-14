import express from "express";
import cors from "cors";
import { getConnection } from "./db/mongodb_conection.js";
import router from "./routes/index.js";

const app = express();
const port = 4001;
app.use(cors());
getConnection();
app.use(express.json());
app.use("/", router);
app.listen(port,()=>{ 
    console.log("app en http://localhost:" + port);
});