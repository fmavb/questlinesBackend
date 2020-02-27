const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://backend:wzOA4mXtuSnBiKDV@cryptodb-ogqc3.mongodb.net/test?retryWrites=true&w=majority";

const router = express.Router();

module.exports = function evaluationRouter() {
    router.route('/challenge1').post((req, res) => {
        MongoClient.connect(uri, (err, client)=>{
            if (err){
                console.log(err);
                res.json({error: err});
            } else {
                const db = client.db('evaluation');
                db.collection("challenge1").insertOne(req.body, (err, result) => {
                    if (err){
                        console.log(err);
                        res.json({error: err});
                    } else {
                        res.json({response: result});
                    }
                });
            }
        });
    });

    router.route('/challenge3').post((req, res) => {
        MongoClient.connect(uri, (err, client)=>{
            if (err){
                console.log(err);
                res.json({error: err});
            } else {
                const db = client.db('evaluation');
                db.collection("challenge3").insertOne(req.body, (err, result) => {
                    if (err){
                        console.log(err);
                        res.json({error: err});
                    } else {
                        res.json({response: result});
                    }
                });
            }
        });
    });
    return router;
};
