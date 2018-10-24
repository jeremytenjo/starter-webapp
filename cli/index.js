#!/usr/bin/env node
const chalk = require('chalk')
const shell = require('shelljs')
const emoji = require('node-emoji')

const initLoad = () => {
  let param1 = process.argv[2]
  let param2 = process.argv[3]

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

console.clear()
initLoad()
