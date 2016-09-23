var userHandler = require('../handlers/userHandler.js');
var adventureHandler = require('../handlers/adventureHandler.js');

// export entire function to server.js
module.exports = function(app, express) {

  // TODO:
  // fill out api requests
  // direct to correct server method

  app.post('/api/signin', userHandler.signin);
  app.post('/api/signup', userHandler.signup);

  app.get('/api/pickAd', adventureHandler.pickAdventure);
  app.get('/api/forgetAd', adventureHandler.forgetAdventure);
  app.get('/api/createAd', adventureHandler.createAdventure);
  app.get('/api/deleteAd', adventureHandler.deleteAdventure);
  app.get('/api/fetchAll', adventureHandler.fetchAllAdventures);
  app.get('/api/fetchMine', adventureHandler.fetchMyInProgressAdventures);
  app.get('/api/fetchCreated', adventureHandler.fetchMyCreatedAdventures);
  app.get('/api/fetchRiddle', adventureHandler.fetchSingleRiddle);

}