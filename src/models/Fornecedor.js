import mongoose from "mongoose";

const fornecedorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String }
}, {versionKey: false});

const fornecedor = mongoose.model("fornecedores", fornecedorSchema);

export { fornecedor, fornecedorSchema };