const router = require("express").Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images' });
const Proyecto = require("../models/proyecto");
const fs = require("fs");

router.get("/", async (req, res) => {
  const proyectos = await Proyecto.find().lean();
  res.render("proyectos/index", { proyectos });
});

router.get("/new", async (req, res) => {
  var fullUrl = req.protocol + '://'+ req.get('host');
  res.render("proyectos/formulario");
});

router.post("/create", upload.single('image'), async (req, res) => {
  console.log(req.file);
  // const finalPath =
  //   req.file.path +
  //   "." +
  //   req.file.path +
  //   "." +
  //   mimeTypeExtension(req.file.mimetype);
  // fs.renameSync(req.file.path, finalPath);
  // req.body.imagen = finalPath;

  try {
    const proyecto = await Proyecto.create(req.body);
    res.redirect("/proyectos");
  } catch (err) {
    res.json({ error: err });
  }
});

function mimeTypeExtension(mimeType) {
  return mimeType.split("/")[1];
}

module.exports = router;
