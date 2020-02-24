
const serverless = require('serverless-http');
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
    res.header('Access-Control-Allow-Origin', 'https://master.d208h0gxtroz1d.amplifyapp.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

challenge1 = 0;
part1 = 0;
part2 = 0;
part3 = 0;
challenge2Completed = true;
challenge3 = 0;

const evaluationRouter = require('./evaluation')();

app.use('/evaluation', evaluationRouter);

app.get("/", (req, res) => {
    res.send("<html><body><h1>REST API</h1></body></html>");
});

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
    challenge2Completed = true;
    res.json({response: "Value set"});
});

app.get("/challenge2", (req, res) => {
    const output = part1 + part2 + part3;
    res.json({score: output, completed: challenge2Completed});
    part1, part2, part3 = 0;
    challenge2Completed = false;
})

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

module.exports.handler = serverless(app);