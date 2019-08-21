"use strict";

// Vendors
var express = require('express');

var router = express.Router(); // Routes

var Charge = require('./stripeCharge'); // Router


router.post('/charge', function (req, res) {
  return Charge(req, res);
}); // Exports

module.exports = router;