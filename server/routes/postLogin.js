const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  ruta: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
  },
  apellidos: {
    type: String,
  },
  correo: {
    type: String,
  },
  telefono: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  calle: {
    type: String,
  },
  colonia: {
    type: String,
  },
  ncasa: {
    type: String,
  },
  cp: {
    type: String,
  },
  lug_nacimiento: {
    type: String,
  },
  estado: {
    type: String,
  },
  estatus: {
    type: String,
  },
  privilegio: {
    type: String,
  },
});

const Login = mongoose.model("trabajadores", LoginSchema);

router.post("/", async (req, res) => {
  const { ruta, password } = req.body;

  const userLogin = await Login.findOne({ ruta, password });

  if (userLogin) {
    res.send("Bienvenido!");
  } else {
    res.status(400).send("Credenciales invalidas");
  }
});

module.exports = router;
