const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

//Configurar servidor básico

//Importar conexión de mongoDB
const archivoBD = require("./conexion");



//Peticion
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/", (req, res) => {
  res.send("Estas en API!");
});

//Importacion de archivo de rutas y modelo
const loginRoutes = require("./routes/postLogin");
app.use("/api/login", loginRoutes);

//Ubicaciones
const ubicacionesRoutes = require("./routes/getUbicaciones");
app.use("/api/ubicaciones", ubicacionesRoutes);

//Usuarios
const usuariosRoutes = require("./routes/getUsers");
app.use("/api/usuarios", usuariosRoutes);


//Configurar puerto :>
app.listen(5000, function () {
  console.log("El servidor está arriba en el puerto 5000");
});
