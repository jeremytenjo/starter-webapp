import ReadOne from './read.one'
import Readmany from './read.many'

export default (type, uploads, userIdorCardId, fetchAmount, lastVisibleDoc) => {
  return type === 'one'
    ? ReadOne(uploads, userIdorCardId)
    : type === 'many'
    ? Readmany(uploads, userIdorCardId, fetchAmount, lastVisibleDoc)
    : null
}
