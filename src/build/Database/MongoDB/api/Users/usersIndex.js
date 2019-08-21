"use strict";

// Vendors
var express = require('express');

var router = express.Router(); // Functions

var create = require('./create');
var addCategory = require('./addCategory');
var removeCategory = require('./removeCategory');
var searchByName = require('./searchByName');
var searchByCategory = require('./searchByCategory'); // Middleware


router.use(function (req, res, next) {
  var db = req.db;
  req.collection = db.collection('users');
  req.payload = req.body.payload;
  return next();
}); // Router

router.post('/create', function (req, res) {
  return create(req, res);
});
router.post('/addCategory', function (req, res) {
  return addCategory(req, res);
});
router.post('/removeCategory', function (req, res) {
  return removeCategory(req, res);
});
router.post('/searchByName', function (req, res) {
  return searchByName(req, res);
});
router.post('/searchByCategory', function (req, res) {
  return searchByCategory(req, res);
}); // Exports

module.exports = router;