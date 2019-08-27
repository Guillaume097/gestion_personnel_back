module.exports = (app) => {
    const conge = require('../controllers/conge.controller.js');


////////////////////////////////// Declaration des routes de l'api /////////////////////////////////////

    // Route de test pour un find all // 
    app.get('/api/conge', conge.findAll);

    // Route de test pour un find conge specifique // 
    app.get('/api/conge/:Congeid', conge.findConge);


    // Route de test pour un create // 
    app.post('/api/conge/create', conge.create);

    // Route de test pour un delete // 
    app.post('/api/conge/delete/:congeID', conge.delete);


    // Route de test pour un update // 
    app.get('/api/conge/update/:congeID', conge.update);



}