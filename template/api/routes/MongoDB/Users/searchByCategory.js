// Resources:
// https://docs.mongodb.com/manual/tutorial/query-arrays/

const searchByCategory = (req, res) => {
  let query = req.body,
    db = req.db,
    client = req.client,
    collection_users = db.collection('users'),
    users

  collection_users
    .find({ categories: { $all: query } })
    .toArray()
    .then((users) => {
      // console.log(users)
      res.json(users)
    })
    .catch((error) => {
      res.json(error)
    })

  client.close()
}

module.exports = searchByCategory
