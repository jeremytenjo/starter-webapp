// Vendors
const functions = require('firebase-functions')
const cors = require('cors')
const express = require('express')
const app = express()

// Routes
const MongoDB = require('./routes/MongoDB/mdbIndex.js')
const PushNotifications = require('./routes/PushNotifications/pnIndex.js')

// Middleware
app.use(cors())
app.options('*', cors())

// Router
app.use('/MongoDB', MongoDB)
app.use('/PushNotifications', PushNotifications)

// Exports
exports.api = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
