const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

//Configurar servidor básico

//Importar conexión de mongoDB
const archivoBD = require("./conexion");

//Importacion de archivo de rutas y modelo
const loginRoutes = require("./routes/login");
app.use("/", loginRoutes);

//Peticion
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Configurar puerto :>
app.listen(5000, function () {
  console.log("El servidor está arriba en el puerto 5000");
});
