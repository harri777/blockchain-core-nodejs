const express = require('express');
const cors = require('cors');
const Blockchain = require('../blockchain/classes/blockchain');

const corsOptions = { origin: ['*'] }
const port = process.env.APP_PORT || 8080;

const app = express();
const blockchain = new Blockchain();

app.use(express.json());
app.use(cors(corsOptions));
require('./routes')(app, blockchain);

app.listen(port || 8080, () => {
    console.log(`Blockchain API listening on port ${port}`)
});