import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

const getOne = async (uploads, cardId = null) => {
  const item = uploads.find((item) => item._id === cardId) || null
  let docsRef = null
  let fetchedUpload = null

  if (item) return { photo: item }

  if (cardId) {
    docsRef = await db
      .collection('photos')
      .doc(cardId)
      .get()

    fetchedUpload = { _id: docsRef.id, ...docsRef.data() }
  }

  return { photo: fetchedUpload }
}

export default getOne
