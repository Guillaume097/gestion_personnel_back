const Personnel = require('../models/personnel.model.js');


// Create and Save a new Note
exports.create = (req, res) => {

    // creation d'une categorie //
    const personnel = new Personnel({

        num_employe: req.body.num_employe,
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        num_tel: req.body.num_tel,

    });

    // Save Note in the database
    personnel.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the 'personnel'."
            });
        });
}

// Recupere et montre toutes les personnelID de la BDD // 
exports.findAll = (req, res) => {
    Personnel.find()
        .then(personnel => {
            res.send(personnel);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving 'personnel'."

            });
        });
};



// Trouver un produit par id //

exports.findPersonnel = (req, res) => {
    Personnel.findById(req.params.Personnelid)
        .then(personnel => {
            if (!personnel) {
                return res.status(404).send({
                    message: "personnel not found with id " + req.params.Personnelid
                });
            }
            res.send(personnel);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.Personnelid
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.Personnelid
            });
        });

};

// Update d'une categorie //

exports.update = (req, res) => {
    Personnel.findByIdAndUpdate(req.params.personnelID,{

        num_employe: req.body.num_employe,
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        num_tel: req.body.num_tel,

    })
        .then(personnel => {
            if (!personnel) {
                return res.status(404).send({
                    message: "produits not found with id " + req.params.personnelID
                });
            }
            res.send(personnel);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.personnelID
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.personnelID
            });
        });

};

// Supprime une categorie avec l'id specifié //

exports.delete = (req, res) => {
    Personnel.findByIdAndDelete(req.params.personnelID)
        .then(personnel => {
            if (!personnel) {
                return res.status(404).send({
                    message: "Sous categorie non trouvé avec cet ID" + req.params.personnelID
                });
            }
            res.send({
                message: "Note deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Sous personnelID avec l'id non trouvé " + req.params.personnelID
                });
            }
            return res.status(500).send({
                message: "Impossible de supprimer la sous categorie avec cet id " + req.params.personnelID
            });
        });

};