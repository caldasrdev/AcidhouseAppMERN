const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProveedoresSchema = new Schema({
    nombre: { type: String, required: true, max: 60 },
    apellido: { type: String, required: true, max: 60 },
    tDocumento: { type: String, required: true, max: 60 },
    nDocumento: { type: String, required: true, max: 60 },
    genero: { type: String, required: true, max: 60 },
    edad: { type: String, required: true, max: 60 },
    direccion: { type: String, required: true, max: 60 },
    municipio: { type: String, required: true, max: 60 },
    departamento: { type: String, required: true, max: 60 },
    zpostal: { type: String, required: true, max: 60 },
    email: { type: String, required: true, max: 60 },
    telefono: { type: String, required: true, max: 60 },
});

module.exports = mongoose.model("proveedores", ProveedoresSchema);