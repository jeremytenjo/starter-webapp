const shell = require('shelljs')
const emoji = require('node-emoji')

exports.index = (templatePath, currentDir) => {
  let emojiSuccess = () => emoji.find('fire').emoji

  //1. are you sure?
  //2 Delete current webpacl/webpackCongfig folder
  shell.rm(`-rf`, `${currentDir}/.babelrc`)

  //3. copy webpackCongfig folder folder from template
  shell.cp('-R', `${templatePath}/.babelrc`, `${currentDir}/`)

  // 4 message
  console.log('Babel Updated! ' + emojiSuccess())
}
