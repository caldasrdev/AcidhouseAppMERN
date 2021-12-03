const Proveedor = require("../models/proveedores.models");
let response = {
    msg:"",
    exito:false
}

exports.create = function (req, res) {
    let proveedor = new Proveedor({

        nombre: req.body.nombre,
        apellido: req.body.apellido,
        tDocumento: req.body.tDocumento,
        nDocumento: req.body.nDocumento,
        genero: req.body.genero,
        edad: req.body.edad,
        direccion: req.body.direccion,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        zpostal: req.body.zpostal,
        email: req.body.email,
        telefono: req.body.telefono,
    })

    proveedor.save(function (err) {
        if (err) {
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar proveedor"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El proveedor se guardó correctamente"
        res.json(response)
    })
}

exports.find = function (req, res) {
    Proveedor.find(function (err, proveedores) {
        res.json(proveedores)
    })
}

exports.findOne = function (req, res) {
    Proveedor.findOne({_id: req.params.id }, function (err, proveedor) {
        res.json(proveedor)
    })
}

exports.update = function (req, res) {
    let proveedor = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        tDocumento: req.body.tDocumento,
        nDocumento: req.body.nDocumento,
        genero: req.body.genero,
        edad: req.body.edad,
        direccion: req.body.direccion,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        zpostal: req.body.zpostal,
        email: req.body.email,
        telefono: req.body.telefono,
    }
    Proveedor.findByIdAndUpdate(req.params.id, { $set: proveedor }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar el proveedor"
                res.json(response)
                return;
        }
        response.exito = true,
        response.msg = "El proveedor se modificó correctamente"
        res.json(response)
 
    })
}

exports.remove = function (req, res) {
    Proveedor.findByIdAndRemove({_id: req.params.id}, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar el proveedor"
                res.json(response)
                return;
        }
        response.exito = true,
        response.msg = "El proveedor se eliminó correctamente"
        res.json(response)
 
    })
}