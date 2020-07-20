const Conge = require('../models/conge.model.js');


// Create and Save
exports.create = (req, res) => {

    // creation d'une categorie //
    const conge = new Conge({
        
        num_employe: req.body.num_employe,
        name_employe: req.body.name_employe,
        prenom_employe: req.body.prenom_employe,
        date_debut: req.body.date_debut,
        date_fin: req.body.date_fin,

    });

    // Save conge dans la BDD
    conge.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating 'conge'."
            });
        });
}

// Recupere et montre toutes les congeID de la BDD // 
exports.findAll = (req, res) => {
    Conge.find()
        .then(conge => {
            res.send(conge);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving 'conge'."

            });
        });
};



// Trouver un produit par id //

exports.findConge = (req, res) => {
    Conge.find({"num_employe": req.params.Congeid})
        .then(conge => {
            if (!conge) {
                return res.status(404).send({
                    message: "conge not found with id " + req.params.Congeid
                });
            }
            res.send(conge);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Conge not found with id " + req.params.Congeid
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.Congeid
            });
        });

};

// Update d'une categorie //

exports.update = (req, res) => {
    Conge.findByIdAndUpdate(req.params.congeID, {

        num_employe: req.body.num_employe,
        name_employe: req.body.name_employe,
        prenom_employe: req.body.prenom_employe,
        date_debut: req.body.date_debut,
        date_fin: req.body.date_fin,
    
            }
        )
        .then(Conge => {
            if (!Conge) {
                return res.status(404).send({
                    message: "Employe not found with id " + req.params.congeID
                });
            }
            res.send(Conge);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "employe not found with id " + req.params.congeID
                });
            }
            return res.status(500).send({
                message: "Error retrieving employe with id " + req.params.congeID
            });
        });

};

// Supprime une categorie avec l'id specifié //

exports.delete = (req, res) => {
    Conge.deleteOne({"num_employe":req.params.congeID})
        .then(Conge => {
            if (!Conge) {
                return res.status(404).send({
                    message: "Sous categorie non trouvé avec cet ID" + req.params.congeID
                });
            }
            res.send({
                message: "Note deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Sous congeID avec l'id non trouvé " + req.params.congeID
                });
            }
            return res.status(500).send({
                message: "Impossible de supprimer la sous categorie avec cet id " + req.params.congeID
            });
        });

};



