"use strict";

// Vendors
var express = require('express');

var router = express.Router(); // Functions

var addTag = require('./addTag'); // Middleware


router.use(function (req, res, next) {
  var db = req.db;
  req.collection = db.collection('photos');
  req.payload = req.body.payload;
  return next();
}); // Router

router.post('/addTag', function (req, res) {
  return addTag(req, res);
}); // Exports

module.exports = router;