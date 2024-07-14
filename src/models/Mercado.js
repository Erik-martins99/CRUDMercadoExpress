import mongoose from "mongoose";

const mercadoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.ObjectId},
    nome: {type: String, required: true},
    endereco: {type: String},
    quantLojas: {type: Number}
}, {versionKey: false});

const mercado = mongoose.model("mercados", mercadoSchema);

export { mercado, mercadoSchema };