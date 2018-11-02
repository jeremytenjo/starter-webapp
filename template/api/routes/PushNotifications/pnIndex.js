let express = require('express')
let app = express()
let pnRegister = require('./pnRegister.js')


//Routes
app.use('/pnRegister', pnRegister)


module.exports = app