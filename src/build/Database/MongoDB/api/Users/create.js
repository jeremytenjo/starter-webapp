"use strict";

var create = function create(req, res) {
  var data = req.payload || {
    name: 5
  };
  var client = req.client;
  var collection = req.collection; //make sure user desent exist

  collection.find({
    _id: data._id
  }).toArray().then(function (user) {
    //create user if one doesent exist
    if (user.length === 0) {
      collection.insertOne(data).then(function (newUser) {
        res.json(newUser.insertedId);
      })["catch"](function (err) {
        res.status(500).json(err.message);
      });
    } else {
      res.status(500).json('User Already extts');
    }

    client.close();
  });
};

module.exports = create;