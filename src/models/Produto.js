import mongoose from "mongoose";
import { mercadoSchema } from "./Mercado.js";
import { fornecedorSchema } from "./Fornecedor.js";


const produtoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    nome: { type: String, required:true },
    preco: { type: Number, required: true },
    mercado: mercadoSchema,
    fornecedor: fornecedorSchema
}, { versionKey: false })

const produto = mongoose.model("produtos", produtoSchema);

export default produto;