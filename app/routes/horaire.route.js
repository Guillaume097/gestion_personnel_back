module.exports = (app) => {
    const horaire = require('../controllers/horaire.controller.js');


    ////////////////////////////////// Declaration des routes de l'api /////////////////////////////////////

     // Route de test pour un find all // 
     app.get('/api/horaire', horaire.findAll);

     // Route de test pour un find par id // 
     app.get('/api/horaire/:horaireid', horaire.findhoraireid);


     // Route de test pour un create // 
     app.post('/api/horaire/create', horaire.create);

     // Route de test pour un delete // 
     app.post('/api/horaire/delete/:horaireID', horaire.delete);


     // Route de test pour un update // 
     app.get('/api/horaire/update/:horaireID', horaire.update);








}