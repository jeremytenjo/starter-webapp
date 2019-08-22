import { updateArray } from '@tenjojeremy/web-toolkit/build/Database/Firestore/Update/firestore.update.index'

export default async ({
  uploads = [],
  photoId,
  action,
  value: { photoInfo = { tags: [] }, newTag, item, index: tagIndex },
}) => {
  const { tags } = photoInfo
  const collection = 'photos'
  const field = 'tags'
  const value = newTag || item

  const addTag = async () => {
    const addConditions = (tags) =>
      tags.includes(newTag) || tags.length >= 10 || !value
        ? { error: 'Aleary added, reached limit or value empty' }
        : { error: false }

    const { error } = addConditions(tags)
    if (error) return { error, uploads: [photoInfo] }

    // If no uploads
    if (uploads.length === 0) {
      photoInfo.tags.unshift(newTag)
      return { error: null, uploads: [photoInfo] }
    }

    // Update database
    updateArray({ collection, field, value, action, docId: photoId })

    // Update locally
    const currentPhotoIndex = uploads.findIndex(
      (image) => image._id === photoId,
    )
    uploads[currentPhotoIndex].tags.unshift(newTag)

    return { error: null, uploads }
  }

  const removeTag = async () => {
    // remove database
    updateArray({ collection, field, value, action, docId: photoId })

    // get photo index from uploads
    const currentPhotoIndex = uploads.findIndex(
      (image) => image._id === photoId,
    )

    // remove locally
    uploads[currentPhotoIndex].tags.splice(tagIndex, 1)

    return { error: null, uploads }
  }

  return action === 'add' ? addTag() : action === 'remove' ? removeTag() : null
}
