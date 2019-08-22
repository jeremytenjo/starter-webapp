const functions = require('firebase-functions')

exports.webhookNew = functions.https.onRequest((req, res) => {
  res.send('Hello')
})
