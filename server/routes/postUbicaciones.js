const express = require("express");
const router = express.Router();

const Ubication = require("../models/ubicaciones");

router.post("/", async (req, res) => {
  const { ruta, tienda, colonia, calle, cp, lat, lng, fecha } = req.body;

  try {
    const lastUbication = await Ubication.findOne({}, { _id: 1 })
      .sort({ $natural: -1 })
      .limit(1);
    let lastId = lastUbication ? parseInt(lastUbication._id) : 1002;

    const newUbication = new Ubication({
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

//RUTA PARA EDITAR UBICACIONES
router.put("/postubicacion/:_id", async (req, res) => {
  const { _id } = req.params;
  const { tienda, colonia, calle, cp } = req.body;

  if (!_id) {
    res.status(400).json({ error: "Se requiere el parametro id" });
    return;
  }

  try {
    const ubicacionActualizada = await Ubication.findByIdAndUpdate(
      _id,
      {
        tienda,
        colonia,
        calle,
        cp,
      },
      { new: true }
    );

    if (!ubicacionActualizada) {
      res
        .status(404)
        .json({ error: "No se encontro la situacion con el id proporcionado" });
      return;
    }

    res.status(200).json(ubicacionActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
