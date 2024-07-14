import mercado from "../models/Mercado.js";

class MercadoController {

    static async findAll(req, res) {
        try {
            const mercadoDescovery =await mercado.find();
            res.status(200).json(mercadoDescovery);
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }

    static async findById(req, res) {
        try {
            const mercadoDiscovery = await mercado.findById(req.params.id);
            res.status(200).json(mercadoDiscovery);
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }

    static async registerMercado(req, res) {
        try {
            const newMercado = await mercado.create(req.body);
            res.status(201).json(newMercado);
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }

    static async updateMercado(req, res) {
        try {
            const mercadoUpdate = await mercado.findByIdAndUpdate(req.params.id, req.body);
            res.status(204).json({ message: "Mercado Updated" });
        } catch(err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }

    static async deleteMercado(req, res) {
        try {
            await mercado.findByIdAndDelete(req.params.id);
            res.status(200).json({ mercado: "Mercado deleted" });
        } catch(err) {
            res.status(500).json({ message:`${err.message}` });
        }
    }
}

export default MercadoController;