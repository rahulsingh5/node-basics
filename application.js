"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb_1 = require("mongodb");
var assert = require("assert");
var config_1 = require("./config");
var app = express();
mongodb_1.MongoClient.connect("mongodb:" + config_1.config.mongodbURL + "/" + config_1.config.dbName, function (error, db) {
    assert.equal(null, error);
    console.log("Application Server connected to " + config_1.config.dbName + " database");
    db.collection('movies').find({}).toArray(function (error, docs) {
        if (docs.length === 0) {
            console.log('There is no documents found');
            db.close();
            return;
        }
        docs.forEach(function (doc) {
            console.log("The movie title is " + doc.title);
        });
        db.close();
    });
    console.log("Called find() for movies");
});
app.listen(config_1.config.port, function () {
    console.log("Server is running at http://localhost:" + config_1.config.port);
});
