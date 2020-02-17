
const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

challenge1 = 0;
part1 = 0;
part2 = 0;
part3 = 0;
challenge3 = 0;

app.get("/challenge1", (req, res) => {
    res.json({score: challenge1});
});

app.post("/challenge1", (req, res) => {
    console.log(req.body);
    challenge1 = req.body.score;
    res.status(200);
    res.json({response: "Value set"});
});

app.get("/part1", (req, res) => {
    res.json({score: part1});
});

app.post("/part1", (req, res) => {
    part1 = req.body.score;
    res.json({response: "Value set"});
});

app.get("/part2", (req, res) => {
    res.json({score: part2});
});

app.post("/part2", (req, res) => {
    part2 = req.body.score;
    res.json({response: "Value set"});
});

app.get("/part3", (req, res) => {
    res.json({score: part3});
});

app.post("/part3", (req, res) => {
    part3 = req.body.score;
    res.json({response: "Value set"});
});

app.get("/challenge3", (req, res) => {
    res.json({score: challenge3});
});

app.post("/challenge3", (req, res) => {
    challenge3 = req.body.score;
    res.json({response: "Value set"});
});

app.listen(port, () => {
    console.log(`Listening on port ${chalk.green(port)}`);
  });