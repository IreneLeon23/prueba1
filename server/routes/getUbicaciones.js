const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//MODEL
const ubicacionesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  colonia: {
    type: String,
    required: true,
  },
  calle: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  lng: {
    type: String,
    required: true,
  },
  ruta: {
    type: String,
    required: true,
  },
  tienda: {
    type: String,
    required: true,
  },
  cp: {
    type: String,
    required: true,
  },
});

const Ubicaciones = mongoose.model("ubicaciones", ubicacionesSchema);

//ROUTE
router.get("/", async (req, res) => {
  try {
    const ubicaciones = await Ubicaciones.find();
    res.json(ubicaciones);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener las ubicaciones");
  }
});

module.exports = router;
