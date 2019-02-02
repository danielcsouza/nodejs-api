const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());



//iniciando o db
mongoose.connect('mongodb://userbkp:PjKQ6ClJ*G61@ds143683.mlab.com:43683/node-api-daniel-database', { useNewUrlParser : true });

requireDir('./src/models');

//const Product = mongoose.model('Product');

app.use("/api",require("./src/routes"));

app.listen(3001);