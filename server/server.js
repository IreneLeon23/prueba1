const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//Configurar servidor básico

//Importar conexión de mongoDB
const archivoBD = require("./conexion");



//Situaciones
const situacionRoutes = require("./routes/situaciones");
app.use("/", situacionRoutes);

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

// const loginRoutes = require("./routes/postLogin");
// app.use("/", loginRoutes);

//Ubicaciones
const ubicacionesRoutes = require("./routes/getUbicaciones");
app.use("/api/ubicaciones", ubicacionesRoutes);

//Usuarios
const usuariosRoutes = require("./routes/getUsers");
app.use("/api/usuarios", usuariosRoutes);


//Configurar puerto :>
app.listen(port, function () {
  console.log("El servidor está arriba en el puerto", port);
});
