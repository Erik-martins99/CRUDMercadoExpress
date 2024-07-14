import { fornecedor } from "../models/Fornecedor.js";

class FornecedorController {

    static async findAll(req, res) {
        try {
            const fornecedorDiscover =  await fornecedor.find();
            res.status(200).json(fornecedorDiscover);
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }

    static async findById(req, res) {
        try {
            const fornecedorDiscover = await fornecedor.findById(req.params.id);
            res.status(200).json(fornecedorDiscover);
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }

    static async registerFornecedor(req, res) {
        try {
            const newFornecedor = await fornecedor.create(req.body);
            res.status(201).json(newFornecedor);
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }                            
    }

    static async updateFornecedor(req, res) {
        try {
            const fornecedorUpdate = await fornecedor.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(fornecedorUpdate);
        } catch(err) {
            res.status(500).jason({ message: `${err.message}` });
        }
    }

    static async deleteFornecedor(req, res) {
        try {
            await fornecedor.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Fornecedor deleted "});
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }
}

export default FornecedorController;