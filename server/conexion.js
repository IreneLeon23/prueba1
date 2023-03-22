const mongoose = require("mongoose");
//Conexion
mongoose.connect(
  "mongodb+srv://alumnos:35413541@practica1.dtdfwfc.mongodb.net/onroute",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//Objeto para almacenar la conexión
const objetoBD = mongoose.connection;
//Al conectar
objetoBD.on("connected", () => {
  console.log("Conexión exitosa👌");
});
//Al NO conectar
objetoBD.on("error", () => {
  console.log("Ocurrió un error al conectarse 🤷‍♀️");
});

//
module.exports = mongoose;
