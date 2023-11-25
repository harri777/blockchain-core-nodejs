const express = require('express');
const cors = require('cors');
const Blockchain = require('../blockchain/classes/blockchain');
const P2PServer = require('../app/config/p2pServer/p2pServer');

const corsOptions = { origin: ['*'] }
const port = process.env.HTTP_PORT || 8080;

const app = express();
const blockchain = new Blockchain();
const p2pServer = new P2PServer(blockchain);

app.use(express.json());
app.use(cors(corsOptions));
require('./routes')(app, blockchain, p2pServer);

app.listen(port || 8080, () => {
    console.log(`Blockchain API listening on port ${port}`)
});
p2pServer.listen();