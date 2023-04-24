const express = require("express");
const router = express.Router();
const Ubicaciones = require("../models/ubicaciones");

router.post("/", async (req, res) => {
  const { ruta, tienda, colonia, calle, cp, lat, lng, fecha } = req.body;

  try {
    const lastUbication = await Ubicaciones.findOne({}, { _id: 1 }).sort({ $natural: -1 }).limit(1);
    let lastId = lastUbication ? parseInt(lastUbication._id) : 1002;

    const newUbication = new Ubicaciones({
      _id: (lastId + 1).toString(),
      ruta,
      tienda,
      colonia,
      calle,
      cp,
      lat,
      lng,
      fecha,
    });

    await newUbication.save();
    res.status(201).send("Ubicación guardada");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al guardar la ubicación");
  }
});

module.exports = router;