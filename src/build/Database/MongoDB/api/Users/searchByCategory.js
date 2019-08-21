"use strict";

// Resources:
// https://docs.mongodb.com/manual/tutorial/query-arrays/
var searchByCategory = function searchByCategory(req, res) {
  var query = req.payload;
  var client = req.client;
  var collection = req.collection;
  collection.find({
    categories: {
      $all: query
    }
  }).toArray().then(function (users) {
    // console.log(users)
    res.json(users);
  })["catch"](function (error) {
    res.status(500).json(error);
  });
  client.close();
};

module.exports = searchByCategory;