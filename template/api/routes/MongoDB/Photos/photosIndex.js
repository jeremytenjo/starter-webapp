// Vendors
const express = require('express')
const router = express.Router()

// Functions
const addTag = require('./addTag')

// Middleware
app.use((req, res, next) => {

})

// Routes
router.post('/addTag', (req, res) => addTag(req, res))

// Exports
module.exports = router
