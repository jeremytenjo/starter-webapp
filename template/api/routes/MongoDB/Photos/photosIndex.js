// Vendors
const express = require('express')
const router = express.Router()

// Functions
const addTag = require('./addTag')

// Middleware
router.use((req, res, next) => {
  const db = req.db
  req.payload = req.body.payload  
  req.collection = db.collection('photos')

  return next()
})

// Router
router.post('/addTag', (req, res) => addTag(req, res))

// Exports
module.exports = router
