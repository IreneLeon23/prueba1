const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Ubicaciones = require("../models/ubicaciones");
//MODEL


//ROUTE
router.get("/", async (req, res) => {
  const {ruta} = req.query;
  try {
    const ubicaciones = await Ubicaciones.find({ruta:ruta});
    res.json(ubicaciones);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener las ubicaciones");
  }
});

module.exports = router;
