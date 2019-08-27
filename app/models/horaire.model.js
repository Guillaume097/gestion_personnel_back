const mongoose = require('mongoose');

const HoraireSchema = mongoose.Schema({

    num_employe: Number,
    horaire_debut: String,
    horaire_fin: String,
    debut_pause: String,
    fin_pause: String,

}, {
    timestamps: true
});

module.exports = mongoose.model('horaires', HoraireSchema);