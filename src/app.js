import express from "express";
import routes from "./routes/index.js";
import dataBaseConect from "./config/DBconect.js";

const conection = dataBaseConect();

conection.on("error", (err) => {
    console.error(`Conection database error: ${err}`);
})

conection.once("open", () => {
    console.log("Data base conected!");
})

const app = express();
routes(app);

export default app;