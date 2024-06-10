const express = require('express');
const bodyParser = require('body-parser');

const { getData } = require('../services/exchangeData');

const app = express();

app.use(bodyParser.json());


app.get('/api/exchangeRate', (req, res) => {
    getData().then(rate => {
        res.json({ data: rate });
    });
});

module.exports = app
