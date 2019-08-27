module.exports = (app) => {
    const personnel = require('../controllers/personnel.controller.js');


    ////////////////////////////////// Declaration des routes de l'api /////////////////////////////////////

    // Route de test pour un find all // 
    app.get('/api/personnel', personnel.findAll);

    // Route de test pour un find conge specifique // 
    app.get('/api/personnel/:Personnelid', personnel.findPersonnel);

    // Route de test pour un create // 
    app.post('/api/personnel/create', personnel.create);


    // Route de test pour un delete // 
    app.post('/api/personneldelete/:personnelID', personnel.delete);


    // Route de test pour un update // 
    app.get('/api/personnelupdate/:personnelID', personnel.update);






}