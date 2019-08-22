import { string, object, number, array } from 'yup'

export default object().shape({
  _id: string().required(),
  userId: string().required(),
  fileName: string().required(),
  fileNameThumb: string().required(),
  fullsizeImg_fileUrl: string().required(),
  thumbImg_fileUrl: string().required(),
  tags: array(),
  timestamp: number(),
})
