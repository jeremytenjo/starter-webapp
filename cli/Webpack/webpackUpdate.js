const shell = require('shelljs')
const emoji = require('node-emoji')

exports.index = (templatePath, currentDir) => {
  let emojiSuccess = () => emoji.find('fire').emoji

  //1. are you sure?
  //2 Delete current webpacl/webpackCongfig folder
  shell.rm(`-rf`, `${currentDir}/.webpack/webpackConfig`)

  //3. copy webpackCongfig folder folder from template
  shell.cp('-R', `${templatePath}/.webpack/webpackConfig`, `${currentDir}/webpack`)

  // 4 message
  console.log('Webpack Updated! ' + emojiSuccess())
}
