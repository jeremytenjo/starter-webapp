const addCategory = (req, res) => {
  const data = req.body || { name: 5 },
    db = req.db,
    client = req.client,
    collection = db.collection('users')

  //only add if not already present
  collection.updateOne({ name: 'Hayle Whitehead' }, { $addToSet: { categories: { $each: ['d3'] } } }).catch((e) => {
    res.send(e)
  })

  res.send('client')
  client.close()
}

module.exports = addCategory
