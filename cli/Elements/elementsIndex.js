#!/usr/bin/env node
const chalk = require('chalk')
const shell = require('shelljs')
const emoji = require('node-emoji')
const atomInfo = require('./atom.js')
const settingInfo = require('./setting.js')
const pageInfo = require('./page.js')

exports.index = function(params) {
  let elementType = params.p1
  let elementName = params.p2
  if (elementType && elementName) {
    let elementNameFolder =
      elementName.charAt(0).toUpperCase() + elementName.slice(1)

    let elementData = getElData(elementType)
    let folderPath = `${elementData.folder}/${elementName}`
    let filePath = `${folderPath}/${elementName}Index.js`
    let emojiSuccess = () => emoji.find('sparkles').emoji
    let emojiFail = () => emoji.find('thumbsup').emoji
    let messageSuccess = chalk.white(
      `${elementData.name} ${chalk.cyanBright(
        elementNameFolder
      )} created ${emojiSuccess()}`
    )
    let messageFail = chalk.white(
      `${elementData.name} ${chalk.cyanBright(
        elementNameFolder
      )} already exists ${emojiFail()}`
    )

    // 1. Check if directory exists
    if (!shell.mkdir(folderPath).stderr) {
      // 1.a If yes add

      shell.mkdir(folderPath)
      shell.touch(filePath)

      // Other Additions
      runAdditional(elementType, elementNameFolder, elementName)

      console.log()
      console.log(messageSuccess)
      console.log()
    } else {
      // 1.b If no, don't add
      console.log()
      console.log(messageFail)
      console.log()
    }
  } else {
    let emojiFail = () => emoji.find('gun').emoji
    console.log('Please add a name (3rd Parameter) ' + emojiFail())
  }
}

const getElData = elementType => {
  switch (elementType) {
    case 'a':
      return atomInfo.data
      break
    case 's':
      return settingInfo.data
      break
    case 'p':
      return pageInfo.data
      break

    default:
      return ''
      break
  }
}

const runAdditional = (elementType, elementNameFolder, elementName) => {
  switch (elementType) {
    case 'p':
      return pageInfo.additional(elementNameFolder, elementName)
      break

    default:
      return ''
      break
  }
}
