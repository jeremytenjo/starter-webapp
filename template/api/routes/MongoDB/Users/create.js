const create = (req, res) => {
  const data = req.body || { name: 5 },
    db = req.db,
    client = req.client,
    collection = db.collection('users')

  // console.log(data)

  //make sure user desent exist
  collection
    .find({ name: data.name })
    .toArray()
    .then((user) => {
      //create user if one doesent exist
      if (user.length === 0) {
        collection
          .insertOne(data)
          .then((newUser) => {
            res.json(newUser.insertedId)
          })
          .catch((err) => {
            res.json(err.message)
          })
      } else {
        res.json('User Already Exists')
      }

      client.close()
    })
}

module.exports = create
