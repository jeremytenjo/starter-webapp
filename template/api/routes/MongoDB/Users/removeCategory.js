const removeCategory = (req, res) => {
  const data = req.body || { name: 5 },
    db = req.db,
    client = req.client,
    collection = db.collection('users')

  //remove category from categories
  collection
    .updateOne({ name: 'Hayle Whitehead' }, { $pull: { categories: 'd3' } })
    .then((user) => {
      res.send('client')
    })
    .catch((error) => {
      res.status(500).json(error)
    })

  client.close()
}
module.exports = removeCategory
