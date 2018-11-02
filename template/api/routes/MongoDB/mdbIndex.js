var express = require('express')
var app = express()
let MongoClient = require('mongodb').MongoClient
let Users = require('./Users/index.js')
let Photos = require('./Photos/index.js')

//Configuration
app.use((req, res, next) => {
  let db_uri =
    'mongodb://jeremytenjo:Shadowsombra7!@cluster0-shard-00-00-ji1uv.mongodb.net:27017,cluster0-shard-00-01-ji1uv.mongodb.net:27017,cluster0-shard-00-02-ji1uv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'

  MongoClient.connect(
    db_uri,
    { useNewUrlParser: true }
  )
    .then((client) => {
      req.client = client
      req.db = client.db('Estilistta-db')
      return next()
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    })
})

//Routes
app.use('/users', Users)
app.use('/photos', Photos)

module.exports = app
