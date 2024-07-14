import express from "express";
import FornecedorController from "../controllers/fornecedroControlle.js";

const routes = express.Router();

routes.get("/fornecedores", FornecedorController.findAll);
routes.get("/fornecedores/:id", FornecedorController.findById);
routes.post("/fornecedores", FornecedorController.registerFornecedor);
routes.put("/fornecedores/:id", FornecedorController.updateFornecedor);
routes.delete("/fornecedores/:id", FornecedorController.deleteFornecedor);

export default routes;