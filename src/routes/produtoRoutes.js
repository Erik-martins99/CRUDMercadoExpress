import express from "express";
import ProdutoController from "../controllers/produtoController.js";

const routes = express.Router();

routes.get("/produtos", ProdutoController.findAll);
routes.get("/produtos/:id", ProdutoController.findById);
routes.post("/produtos", ProdutoController.registerProduto);
routes.put("/produtos/:id", ProdutoController.updateProduto);
routes.delete("/produtos/:id", ProdutoController.deleteProduto);

export default routes;