var express = require('express')
var router = express.Router()

let addTag = require('./addTag')

router.post('/addTag', (req, res) => addTag(req, res))

module.exports = router
