const router = require("express").Router();
const { check, validationResult } = require("express-validator");

const Proyecto = require("../../models/proyecto");

router.get("/", async (req, res) => {
  console.log(req.payload);
  try {
    const proyectos = await Proyecto.find();
    // proyectos.map(proyecto=>{
    //   return {
    //     proyecto, imagen: proyecto.imagen.split('/').splice(0,1).join('/')
    //   }
    // })
    res.json(proyectos);
  } catch (err) {
    res.status(503).json({ error: err });
  }
});

router.get("/:idProyecto", async (req, res) => {
  try {
    const proyecto = await Proyecto.findById(req.params.idProyecto);
    res.json(proyecto);
  } catch (err) {
    res.status(503).json({ error: err });
  }
});

router.get("/category/:category", async (req, res) => {
  console.log(req.payload);
  try {
    const proyectos = await Proyecto.find({ category: req.params.category });
    res.json(proyectos);
  } catch (err) {
    res.status(503).json({ error: err });
  }
});

router.post(
  "/",
  [
    check(
      "titulo",
      "El titulo debe incluirse en la peticion y tiene un maximo de 40 caracteres"
    )
      .exists()
      .notEmpty()
      .isLength({ max: 40 }),
    check(
      "description",
      "La descripcion debe incluirse en la peticion y tiene un maximo de 300 caracteres"
    )
      .notEmpty()
      .exists()
      .isLength({ max: 300 }),
    check("url", "La URL del proyecto debe ser correcta").isURL(),
  ],
  async (req, res) => {
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
  }
);

router.put("/:proyectoId", async (req, res) => {
  try {
    const proyectoActualizado = await Proyecto.findByIdAndUpdate(
      req.params.proyectoId,
      req.body,
      { new: true }
    );
    res.json(proyectoActualizado);
  } catch (err) {
    res.status(503).json({ error: err });
  }
});

router.delete("/:proyectoId", async (req, res) => {
  try {
    const proyectoBorrado = await Proyecto.findByIdAndDelete(
      req.params.proyectoId
    );
    res.json(proyectoBorrado);
  } catch (err) {
    res.status(503).json({ error: err });
  }
});

module.exports = router;
