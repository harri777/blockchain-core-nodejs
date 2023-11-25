const { healthcheck } = require('../controllers/healthcheck');
// const { blocks  } = require('../controllers/blockchain');

module.exports = function(app){
    app.get('/healthcheck', healthcheck);
    // app.post('/blocks', session);

}