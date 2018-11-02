const functions = require('firebase-functions')
const cors = require('cors')
const express = require('express')
var MongoDB = require('./routes/MongoDB/MDBIndex.js')
var PushNotifications = require('./routes/PushNotifications/pnIndex.js')


const app = express()

app.use(cors({ origin: true }))

app.use('/MongoDB', MongoDB)
app.use('/PushNotifications', PushNotifications)



exports.api = functions.https.onRequest(app)
