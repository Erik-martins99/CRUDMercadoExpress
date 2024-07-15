import produto from "../models/Produto.js";
import { fornecedor } from "../models/Fornecedor.js";
import { mercado } from "../models/Mercado.js";

class ProdutoController {

    static async findAll(req, res) {
        try {
            const produtoDescover = await produto.find();
            res.status(200).json(produtoDescover);
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }

    static async findById(req, res) {
        try {
            const produtoDescover = await produto.findById(req.params.id);
            res.status(200).json(produtoDescover);
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }

    static async registerProduto(req, res) {
        const newProduto = req.body;
        try {
            const mercadoDiscovery = await mercado.findById(newProduto.mercado);
            const fornecedorDiscovery = await fornecedor.findById(newProduto.fornecedor);
            const productFull = { ...newProduto, mercado: { ...mercadoDiscovery._doc }, fornecedor: { ...fornecedorDiscovery._doc } };
            const createdProduto = await produto.create(productFull);
            res.status(201).json(createdProduto);
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }

    static async updateProduto(req, res) {
        try {
            await produto.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: "Produto updated" });
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }

    static async deleteProduto(req, res) {
        try {
            await produto.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Produto deleted" });
        } catch(err) {
            res.status(500).json({ message:`${err.message}` });
        }
    }
}

export default ProdutoController;