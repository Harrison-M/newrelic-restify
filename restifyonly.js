var assert = require('assert');
var express = require('express');
var request = require('supertest');
var restify = require('restify');

var queryValue;

app = express();
app.get('/', function(req, res) {
    console.log(req.query);
    console.log(req.url);
    queryValue = req.query.test;
    res.send(200);
});

request(app)
    .get('/?test=success')
    .expect(200)
    .expect(function() {
        assert.equal(queryValue, "success");
    })
    .end(function(err) {
        if (err) {
            console.error(err);
        }
        else {
            console.log('Restify okay');
        }
    });
