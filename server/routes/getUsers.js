const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//MODEL
const usersSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  ruta: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  calle: {
    type: String,
    required: true,
  },
  colonia: {
    type: String,
    required: true,
  },
  ncasa: {
    type: String,
    required: true,
  },
  cp: {
    type: String,
    required: true,
  },
  lug_nacimiento: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  estatus: {
    type: String,
    required: true,
  },
  privilegio: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("trabajadores", usersSchema);

//ROUTE
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener los usuarios");
  }
});

module.exports = router;
