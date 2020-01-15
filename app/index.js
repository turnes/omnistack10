const express = require("express");
const PORT = 3000;
const HOST = '0.0.0.0';
const mongoose = require("mongoose");
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://omniestack:omniestack@mongodb:27017', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(PORT, HOST);