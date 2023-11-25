const express = require('express');
const cors = require('cors');

const corsOptions = { origin: ['*'] }
const port = process.env.APP_PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
require('./routes')(app);


app.listen(port || 8080, () => {
    console.log(`Blockchain API listening on port ${port}`)
});