const mongoose = require('mongoose');

const CongeSchema = mongoose.Schema({
   
    num_employe: Number,
    name_employe: String,
    prenom_employe: String,
    date_debut: Date,
    date_fin: Date,

}, {
    timestamps: true
});

module.exports = mongoose.model('conges', CongeSchema);