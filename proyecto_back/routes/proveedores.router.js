const express = require("express");
const router = express.Router();
const proveedoresController = require("../controllers/proveedores.controller")

router.post("/", proveedoresController.create)
router.get("/", proveedoresController.find)
router.get("/:id", proveedoresController.findOne)
router.put("/:id", proveedoresController.update)
router.delete("/:id", proveedoresController.remove)

module.exports = router