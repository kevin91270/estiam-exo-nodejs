var Auteur = require('../model/auteur');


class AuteurService{
    constructor(req, res){
        this.req = req;
        this.res = res;
    }

    add(addAuteur){
        addAuteur.save((err) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send('Auteur livre ajouté');
            }
        });
    }

    all(){
        Auteur.find((err, allAuteur) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.json(allAuteur);
            }
        });
    }

    getByID(id){
        Auteur.findById(id, (err, AuteurById) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send(AuteurById);
            }
        });
    }


    update(){
        var id = this.req.params.id;
        Auteur.findById(id, (err, putauteur) => {
            if(err){
                this.res.send(err);
            }
            else{
                putauteur.first_name = this.req.body.first_name;
                putauteur.last_name = this.req.body.last_name;
                putauteur.email = this.req.body.email;
                
                putauteur.save((err) => {
                    if(err){
                        this.res.send(err);
                    }
                    else{
                        this.res.send("Mise à jour auteur");
                    }
                });
            }
        });
    }

    delete(id){
        Auteur.remove({
            _id:id
        }, (err) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send("Auteur supprimé");
            }
        });
    }
}

module.exports = AuteurService;