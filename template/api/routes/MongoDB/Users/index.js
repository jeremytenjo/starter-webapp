var express = require('express')
var router = express.Router()

let create = require('./create')
let addCategory = require('./addCategory')
let removeCategory = require('./removeCategory')
let searchByName = require('./searchByName')
let searchByCategory = require('./searchByCategory')

router.post('/create', (req, res) => create(req, res))
router.post('/addCategory', (req, res) => addCategory(req, res))
router.post('/removeCategory', (req, res) => removeCategory(req, res))
router.post('/searchByName', (req, res) => searchByName(req, res))
router.post('/searchByCategory', (req, res) => searchByCategory(req, res))

module.exports = router
