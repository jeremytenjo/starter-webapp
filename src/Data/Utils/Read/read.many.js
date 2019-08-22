import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

const uploadsRead = async (
  uploads = [],
  stylistId = null,
  fetchAmount = 3,
  lastVisibleDoc = '',
) => {
  let docsRef = null
  let fetchedUploads = []
  const uploadsLength = uploads.length
  let fetchedAll = null

  if (stylistId) {
    docsRef = await db
      .collection('photos')
      .where('userId', '==', stylistId)
      .orderBy('timestamp', 'desc')
      .startAfter(lastVisibleDoc)
      .limit(fetchAmount)
      .get()

    lastVisibleDoc = docsRef.docs[docsRef.docs.length - 1]

    docsRef.forEach((doc) =>
      fetchedUploads.push({ _id: doc.id, ...doc.data() }),
    )
  }

  fetchedAll = fetchedUploads.length === 0

  fetchedUploads =
    uploadsLength > 0 ? [...uploads, ...fetchedUploads] : fetchedUploads

  return { uploads: fetchedUploads, lastVisibleDoc, fetchedAll }
}

export default uploadsRead
