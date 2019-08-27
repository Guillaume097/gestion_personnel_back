const mongoose = require('mongoose');

const PersonnelSchema = mongoose.Schema({

    num_employe: Number,
    nom: String,
    prenom: String,
    age: Number,
    num_tel: String

}, {
    timestamps: true
});

module.exports = mongoose.model('personnels', PersonnelSchema);