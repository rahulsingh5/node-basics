"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var config_1 = require("./config");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello from express js');
});
app.use(function (req, res) {
    res.sendStatus(404);
});
app.listen(config_1.config.port, function () {
    console.log("Server is running at http://localhost:" + config_1.config.port);
});
