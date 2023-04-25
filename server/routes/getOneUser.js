const express = require("express");
const router = express.Router();
const Users = require("../models/trabajadores"); // import the model

//ROUTE
router.get("/", async (req, res) => {
  try {
    const ruta = req.query.ruta;
    if (!ruta) {
      return res.status(400).send("Ruta parameter is missing");
    }
    const user = await Users.findOne({ ruta: ruta });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener el usuario");
  }
});

module.exports = router;