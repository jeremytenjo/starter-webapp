const component = require('./component')
const story = require('./story')

const template = {
  type: 'Component with story',
  files: [...component.files, ...story.files],
}

module.exports = {
  template,
}
