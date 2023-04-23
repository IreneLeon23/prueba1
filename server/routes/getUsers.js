const express = require("express");
const router = express.Router();
const Users = require("../models/trabajadores"); // import the model

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
