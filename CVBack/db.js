const mongoose = require('mongoose');

const urlMongo = process.env.MONGO_URL;



mongoose.connect(urlMongo);