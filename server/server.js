const express = require("express");
const app = express();
const port = process.env.PORT || "8080";
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

//Configurar servidor básico

//Importar conexión de mongoDB
const archivoBD = require("./conexion");

//Peticion
app.get("/", (req, res) => {
  res.send("Hola cara de bola!");
});

 //Importacion de archivo de rutas y modelo

//Situaciones
const situacionRoutes = require("./routes/situaciones");
app.use("/situaciones", situacionRoutes);

//Login
// const loginRoutes = require("./routes/postLogin");
// app.use("/login", loginRoutes);
const loginRoutes = require("./routes/postLogin");
app.use("/", loginRoutes);

//Ubicaciones
const ubicacionesRoutes = require("./routes/getUbicaciones");
app.use("/ubicaciones", ubicacionesRoutes);

//Usuarios
const usuariosRoutes = require("./routes/getUsers");
app.use("/usuarios", usuariosRoutes);



app.listen(port, () => console.log(`Onroute app listening on port ${port}!`));
