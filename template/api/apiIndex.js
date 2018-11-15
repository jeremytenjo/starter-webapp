// Vendors
const functions = require('firebase-functions')
const cors = require('cors')
const express = require('express')

// Routes
const MongoDB = require('./routes/MongoDB/mdbIndex.js')
const PushNotifications = require('./routes/PushNotifications/pnIndex.js')

const app = express()
app.use(cors({ origin: true }))

// Router
app.use('/MongoDB', MongoDB)
app.use('/PushNotifications', PushNotifications)

exports.api = functions.https.onRequest(app)
