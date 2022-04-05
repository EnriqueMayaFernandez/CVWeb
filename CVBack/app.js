const express = require("express");
const cors = require('cors');
const app = express();

require("dotenv").config();
require("./db");

const apiRouter = require("./routes/api");

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use("/api", apiRouter);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}!!`);
});
