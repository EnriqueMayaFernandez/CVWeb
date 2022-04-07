const express = require("express");
const exphbs = require("express-handlebars");
const cors = require('cors');
const app = express();

require("dotenv").config();
require("./db");

const apiRouter = require("./routes/api");

//Template Engine Setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.get('/test',(req,res) => {
  res.render('prueba')
});

app.use("/api", apiRouter);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}!!`);
});
