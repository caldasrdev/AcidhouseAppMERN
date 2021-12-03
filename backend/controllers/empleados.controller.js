const Empleado = require("../models/empleados.models");
let response = {
    msg:"",
    exito:false
}

exports.create = function (req, res) {
    let empleado = new Empleado({

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

    empleado.save(function (err) {
        if (err) {
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar empleado"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El empleado se guardó correctamente"
        res.json(response)
    })
}

exports.find = function (req, res) {
    Empleado.find(function (err, empleados) {
        res.json(empleados)
    })
}

exports.findOne = function (req, res) {
    Empleado.findOne({_id: req.params.id }, function (err, empleado) {
        res.json(empleado)
    })
}

exports.update = function (req, res) {
    let empleado = {
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
    Empleado.findByIdAndUpdate(req.params.id, { $set: empleado }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar el empleado"
                res.json(response)
                return;
        }
        response.exito = true,
        response.msg = "El empleado se modificó correctamente"
        res.json(response)
 
    })
}

exports.remove = function (req, res) {
    Empleado.findByIdAndRemove({_id: req.params.id}, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar el empleado"
                res.json(response)
                return;
        }
        response.exito = true,
        response.msg = "El empleado se eliminó correctamente"
        res.json(response)
 
    })
}