const router = require("express").Router();
const { check, validationResult } = require("express-validator");

const Proyecto = require("../../models/proyecto");

router.get("/", async (req, res) => {
  console.log(req.payload);
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (err) {
    res.status(503).json({ error: err });
  }
});

router.post("/", [
    check("titulo","El titulo debe incluirse en la peticion y tiene un maximo de 40 caracteres").exists().isLength({max:40}),
    check("descripcion","La descripcion debe incluirse en la peticion y tiene un maximo de 300 caracteres").exists().isLength({max:300}),
    check('url', 'La URL del proyecto debe ser correcta').isURL()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const nuevoProyecto = await Proyecto.create(req.body);
    res.json(nuevoProyecto);
  } catch (err) {
    res.status(503).json({ error: err });
  }
});

router.put("/:proyectoId", async (req,res)=>{
    try{
        const proyectoActualizado = await Proyecto.findByIdAndUpdate(req.params.proyectoId,req.body,{new:true});
        res.json(proyectoActualizado);
    }catch(err){
        res.status(503).json({ error: err });
    }
});

router.delete("/:proyectoId", async (req,res)=>{
    try{
        const proyectoBorrado = await Proyecto.findByIdAndDelete(req.params.proyectoId);
        res.json(proyectoBorrado);
    }catch(err){
        res.status(503).json({ error: err });
    }
    
});

module.exports = router;
