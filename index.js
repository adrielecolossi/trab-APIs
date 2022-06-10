const express = require("express");
const axios = require('axios');

const { Controller } = require('./src/controllers/controller');
const controller = new Controller();
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.urlencoded());

app.post('/daily', controller.buscar)

app.get('/', (req, res) => {
    res.redirect('/inicial.html');
});


app.listen(3000, () => console.log("Escutando na porta 3000"));
