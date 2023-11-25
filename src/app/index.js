const express = require('express');
const cors = require('cors');

const corsOptions = { origin: ['*'] }
const port = process.env.APP_PORT;

const app = express();

app.use(express.json());
app.use(cors(corsOptions));


app.listen(port || 8080, () => {
    console.log(`Blockchain API listening on port ${port}`)
});