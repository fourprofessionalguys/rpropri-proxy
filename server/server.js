const express = require('express');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware');

const apiProxy = proxy('https://localhost:3000');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use('/', apiProxy);

app.listen(port, () => { console.log(`Listening on port ${port}`) });