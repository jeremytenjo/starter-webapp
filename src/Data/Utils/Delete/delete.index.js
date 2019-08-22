import { storageRemove } from '@tenjojeremy/web-toolkit/build/Storage/FIrebase/Storage/storage.index'
import { firestoreRemove } from '@tenjojeremy/web-toolkit/build/Database/Firestore/firestore.index.js'

// called remove instead of deete bcause delete is reserved word
export default async (uploads, userId, photoId, itemsIds) => {
  const newState = uploads
  const collection = 'photos'

  // Remove from database
  firestoreRemove(userId, photoId, collection)

  // Remove from storage
  await Promise.all(
    itemsIds.map((itemId) => {
      storageRemove(userId, itemId)
    }),
  )

  // Remove from state
  const deletedPhotoIndex = uploads.findIndex((item) => item._id === photoId)
  newState.splice(deletedPhotoIndex, 1)

  return newState
}
