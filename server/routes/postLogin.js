const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  ruta: String,
  pass: String,
});

const Login = mongoose.model("logins", LoginSchema);

router.post("/userLogin", async (req, res) => {
  const { ruta, pass } = req.body;

  const userLogin = await Login.findOne({ ruta, pass });

  if (userLogin) {
    res.send("Bienvenido!");
  } else {
    res.status(400).send("Credenciales invalidas");
  }
});

module.exports = router;
