const { healthcheck } = require('../controllers/healthcheck');
const { getBlocks, mineBlock  } = require('../controllers/blockchain');

module.exports = function(app, blockchain){
    app.get('/healthcheck', healthcheck);
    app.get('/blocks', (req, res) => { getBlocks(req, res, blockchain);});
    app.post('/mine', (req, res) => { mineBlock(req, res, blockchain);});
}