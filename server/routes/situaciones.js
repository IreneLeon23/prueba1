const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const SituacionSchema = new mongoose.Schema({
    descripcion: String,
    fecha: String,
    ruta: String,
    situacion: String,
});

const Situacion = mongoose.model("situaciones", SituacionSchema);

//RUTA PARA SUBIR UNA NUEVA SITUACION
router.post("/situaciones", async (req, res) => {
    const { descripcion, fecha, ruta, situacion } = req.body;

    const nuevaSituacion = new Situacion({
        descripcion,
        fecha,
        ruta,
        situacion,
    });

    try {
        const situacionGuardada = await nuevaSituacion.save();

        res.status(201).json(situacionGuardada);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
});

//RUTA PARA OBTENER LAS SITUACIONES
router.get("/situaciones", async (req, res) => {
    const {ruta} = req.query;

    if(!ruta) {
        res.status(400).json({error: "Se requiere el parametro ruta"})
        return;
    }

    try{
        const situaciones = await Situacion.find({ ruta: ruta });
        res.status(200).json(situaciones);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
});

//RUTA PARA EDITAR SITUACIONES
router.put("/situaciones/:_id", async (req, res) => {
    const { _id } = req.params;
    const {descripcion, fecha, situacion} = req.body;

    if(!_id) {
        res.status(400).json({error: "Se requiere el parametro id"})
        return;
    }

    try{
        const situacionActualizada = await Situacion.findByIdAndUpdate(
            _id,
            {
                descripcion,
                fecha,
                situacion,
            },
            {new: true}
        );

        if(!situacionActualizada) {
            res.status(404).json({error: "No se encontro la situacion con el id proporcionado"});
            return;
        }

        res.status(200).json(situacionActualizada);
    } catch(error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router;

// router.patch('/situaciones/:id', getSituaciones, async(req, res) => {
//     const {descripcion, fecha, situacion} = req.body;

//     res.reportes.descripcion = descripcion
//     res.reportes.fecha = fecha
//     res.reportes.situacion = situacion

//     res.json(res.reportes)

//     res.reportes.save()
// });



// //FUNCION MEDIA PARA OBTENER LAS SITUACIONES POR ID
// async function getSituaciones (req, res, next){
//     let reportes
//     try {
//         reportes = await Situacion.findById(req,params.id);
//         if (reportes === null) {
//             return res.status(404).json({mensaje: 'No se pudo encontrar la situacion'})
//         }
//     } catch(error){
//         return res.status(500).json({mensaje: error.mensaje})
//     }

//     res.reportes = reportes
//     next();
// }
