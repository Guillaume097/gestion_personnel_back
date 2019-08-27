const Horaire = require('../models/horaire.model.js');


// Create and Save a new Note
exports.create = (req, res) => {

    // creation d'une categorie //
    const horaire = new Horaire({

        num_employe: req.body.num_employe,
        horaire_debut: req.body.horaire_debut,
        horaire_fin: req.body.horaire_fin,
        debut_pause: req.body.debut_pause,
        fin_pause: req.body.fin_pause,

    });

    // Save Note in the database
    horaire.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the 'horaire'."
            });
        });
}

// Recupere et montre toutes les horaireID de la BDD // 
exports.findAll = (req, res) => {
    Horaire.find()
        .then(horaire => {
            res.send(horaire);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving 'horaire'."

            });
        });
};



// Trouver un produit par id //

exports.findhoraireid = (req, res) => {
    Horaire.findById(req.params.horaireid)
        .then(horaire => {
            if (!horaire) {
                return res.status(404).send({
                    message: "horaire not found with id " + req.params.horaireid
                });
            }
            res.send(horaire);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.horaireid
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.horaireid
            });
        });

};


// Update d'une categorie //

exports.update = (req, res) => {
    Horaire.findByIdAndUpdate(req.params.horaireID, {

        num_employe: req.body.num_employe,
        horaire_debut: req.body.horaire_debut,
        horaire_fin: req.body.horaire_fin,
        debut_pause: req.body.debut_pause,
        fin_pause: req.body.fin_pause,

        }
    )
        .then(Horaire => {
            if (!Horaire) {
                return res.status(404).send({
                    message: "produits not found with id " + req.params.horaireID
                });
            }
            res.send(Horaire);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.horaireID
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.horaireID
            });
        });

};

// Supprime une categorie avec l'id specifié //

exports.delete = (req, res) => {
    Horaire.deleteOne({"num_employe":req.params.horaireID})
        .then(Horaire => {
            if (!Horaire) {
                return res.status(404).send({
                    message: "Sous categorie non trouvé avec cet ID" + req.params.horaireID
                });
            }
            res.send({
                message: "Note deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Sous horaireID avec l'id non trouvé " + req.params.horaireID
                });
            }
            return res.status(500).send({
                message: "Impossible de supprimer la sous categorie avec cet id " + req.params.horaireID
            });
        });

};