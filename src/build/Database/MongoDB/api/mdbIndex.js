"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

// Vendors
var express = require('express');

var app = express();

var MongoClient = require('mongodb').MongoClient; // Routes


var Users = require('./Users/usersIndex.js');
var Photos = require('./Photos/photosIndex.js'); // Vars


var dbName = 'Estilistta-db'; // Middleware

app.use(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var db_uri;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            db_uri = 'mongodb://jeremytenjo:Shadowsombra7!@cluster0-shard-00-00-ji1uv.mongodb.net:27017,cluster0-shard-00-01-ji1uv.mongodb.net:27017,cluster0-shard-00-02-ji1uv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
            MongoClient.connect(db_uri, {
              useNewUrlParser: true
            }).then(function (client) {
              req.client = client;
              req.db = client.db(dbName);
              return next();
            })["catch"](function (error) {
              console.log(error);
              res.json(error);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()); // Router

app.use('/users', Users);
app.use('/photos', Photos); // Endware

app.use(function (req) {
  console.log('SHOULD RUN LATS to close client');
  req.client.close();
}); // Exports

module.exports = app;