import express from "express";
import MercadoController from "../controllers/mercadoController.js";

const routes = express.Router();

routes.get("/mercados", MercadoController.findAll);
routes.get("/mercados/:id", MercadoController.findById);
routes.post("/mercados", MercadoController.registerMercado);
routes.put("/mercados/:id", MercadoController.updateMercado);
routes.delete("/mercados/:id", MercadoController.deleteMercado);

export default routes;