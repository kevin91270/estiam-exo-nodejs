var mongoose = require('mongoose');

//Le schéma de la BDD
const bookSchema = new mongoose.Schema({

    name : String,
    ISBM : String,
    price : String,
    //id_auteur : String

});


class Book {
    constructor(name, ISBM, price){

        //this._id = id;
        this.name = name;
        this.ISBM = ISBM;
        this.price = price;
        //this.id_auteur = this.id_auteur;

    }
}

module.exports = mongoose.model('Book', bookSchema);