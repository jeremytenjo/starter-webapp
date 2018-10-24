const shell = require('shelljs')

exports.data = {
  name: 'Page',
  folder: `${process.cwd()}/src/components/pages`
}

const data = {
  name: 'Page',
  folder: `${process.cwd()}/src/components/pages`
}

exports.additional = function(elementNameFolder, elementName) {
  return shell.touch(`${data.folder}/${elementNameFolder}/${elementNameFolder}Routes.js`)
}
