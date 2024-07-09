import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongo.js";
import router from "./routes/router.js";


// import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "../swagger.json" assert { type: 'json' };

import path from "path";
import { fileURLToPath } from 'url';
import cors from "cors";

// Obtener la ruta del archivo actual y su directorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const CONTAINER_PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json()); // api
//app.use(express.urlencoded({extended:true})); // vistas
connectDB();

// app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument));


app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.use("/api", router);

app.listen(CONTAINER_PORT, () => {
    console.log("Aplicacion en marcha en el puerto " + process.env.APP_PORT);
});