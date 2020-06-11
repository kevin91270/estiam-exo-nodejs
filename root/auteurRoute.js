var express = require('express');

var app = express();
var router = express.Router();

var AuteurService = require('../services/auteurService');
var Auteur = require('../model/auteur');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//GET ALL
router.get('/', (req, res) => {

    var auteurService = new AuteurService(req, res);
    auteurService.all();

    console.log("avoir tout les auteur");
});


//GET BY ID
router.get('/getbyid/:id', (req, res) => {

    var id = req.params.id;
    var auteurService = new AuteurService(req, res);
    auteurService.getByID(id);

});

//POST
router.post('/add', (req, res) => {

    var auteur = new Auteur(req.body);
    console.log(req.body);
    console.log("ajouter auteur : ", auteur);
    var auteurService = new AuteurService(req, res);
    result = auteurService.add(auteur);

});


//PUT
router.put('/update/:id', (req, res) => {

    var auteurUpdate = new Auteur(req.body);
    console.log("update auteur : ", req.body);
    var auteurService = new AuteurService(req, res);
    auteurService.update(auteurUpdate);

});

//DELETE
router.delete('/delete/:id', (req, res) => {

    var id = req.params.id;
    var auteurService = new AuteurService(req, res);
    auteurService.delete(id);

});

module.exports = router;