const express = require('express');

const bookRoot = require('./root/bookRoute');
const auteurRoot = require('./root/auteurRoute');
const customerRoot = require('./root/customerRoute');

const app = express();
const bodyParser = require('body-parser');

var mongoose = require('mongoose');


var urlDB = "mongodb://localhost:27017/Estiam-NodeJS-DB";
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var db = mongoose.connection;
db.on('error', console.error.bind(console,"Erreur de connexion à la base de donnée"));

db.once('open', ()=> {
    console.log("Connexion à la base de donnée OK");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use('/book', bookRoot);
app.use('/auteur', auteurRoot);
app.use('/customer', customerRoot);

app.listen(3000, () => {
    console.log('Serveur Lancée...');
});