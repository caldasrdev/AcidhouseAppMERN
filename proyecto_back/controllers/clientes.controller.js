const Cliente = require("../models/clientes.models");
let response = {
    msg:"",
    exito:false
}

exports.create = function (req, res) {
    let cliente = new Cliente({

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

    cliente.save(function (err) {
        if (err) {
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar cliente"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El cliente se guardó correctamente"
        res.json(response)
    })
}

exports.find = function (req, res) {
    Cliente.find(function (err, clientes) {
        res.json(clientes)
    })
}

exports.findOne = function (req, res) {
    Cliente.findOne({_id: req.params.id }, function (err, cliente) {
        res.json(cliente)
    })
}

exports.update = function (req, res) {
    let cliente = {
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
    Cliente.findByIdAndUpdate(req.params.id, { $set: cliente }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar el cliente"
                res.json(response)
                return;
        }
        response.exito = true,
        response.msg = "El cliente se modificó correctamente"
        res.json(response)
 
    })
}

exports.remove = function (req, res) {
    Cliente.findByIdAndRemove({_id: req.params.id}, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar el cliente"
                res.json(response)
                return;
        }
        response.exito = true,
        response.msg = "El cliente se eliminó correctamente"
        res.json(response)
 
    })
}