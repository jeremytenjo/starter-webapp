// import filesUpload from '@tenjojeremy/web-toolkit/build/Media/Files/Firebase/file.upload'
const filesUpload = () => null

export default async ({ uploads, userId, file }) => {
  if (userId && file) {
    const uploadedPhotoData = await filesUpload(userId, file, 'photos')
    const currentUploads = uploads.slice()
    currentUploads.unshift(uploadedPhotoData)

    return currentUploads
  }
}
