import express from "express";
import app from "../app.js";
import mercado from "./mercadoRoutes.js"
import fornecedor from "./fornecedorRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("API de Mercado com Node.JS"));

    app.use(express.json(), mercado, fornecedor);
}

export default routes;