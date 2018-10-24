const searchByName = (req, res) => {
  // console.log(req.body.name)
  const db = req.db,
    client = req.client,
    collection_users = db.collection('users'),
    regxName = new RegExp(req.body.name)

  collection_users
    .find({ name: { $regex: regxName, $options: 'i' } })
    .toArray()
    .then((users) => res.json(users))
    .catch((error) => res.json(error))
}
module.exports = searchByName
