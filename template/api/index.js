const functions = require('firebase-functions')
const cors = require('cors')
const express = require('express')
var MongoDB = require('./routes/MongoDB/index.js')

const app = express()

app.use(cors({ origin: true }))

app.use('/MongoDB', MongoDB)

exports.api = functions.https.onRequest(app)
