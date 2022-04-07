const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let proyectoSchema = new Schema({
  titulo: String,
  description: String,
  url: String,
  client: String,
  urlClient: String,
  category: {
    type: String,
    enum: ['angular','wordpress','nodejs','frontend','backend']
  },
  image: String
});

module.exports = mongoose.model('Proyecto', proyectoSchema);
