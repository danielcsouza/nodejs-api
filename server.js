const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

var port = process.env.PORT || 8080;


//iniciando o db

mongoose.connect('mongodb://conectionstring aqui.', {
    useNewUrlParser: true
});

requireDir('./src/models');

//const Product = mongoose.model('Product');

app.use("/api", require("./src/routes"));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port);

//var swaggerUi = require('swagger-ui-express'),