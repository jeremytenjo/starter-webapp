// Vendors
const express = require('express')
const router = express.Router()

// Functions
const function1 = require('./function1')

// Middleware

// Router
router.post('/function1', (req, res) => function1(req, res))

// Exports
module.exports = router
