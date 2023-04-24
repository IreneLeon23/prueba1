const mongoose = require("mongoose");

const ubicationSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    ruta: {
      type: String,
      required: true,
    },
    tienda: {
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
    cp: {
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
    fecha: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Ubication = mongoose.model("ubicaciones", ubicationSchema);

module.exports = Ubication;
