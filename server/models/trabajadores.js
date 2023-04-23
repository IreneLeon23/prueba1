const mongoose = require("mongoose");

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

module.exports = Users;