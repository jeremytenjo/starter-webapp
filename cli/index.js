#!/usr/bin/env node
const elementsIndex = require('./Elements/elementsIndex.js')
const newProject = require('./Project/newProject.js')
const templatePath = 'C:/Dev/Personal Projects/Webapp/template'

const initLoad = () => {
  let param1 = process.argv[2]
  let param2 = process.argv[3]

  switch (param1) {
    case 'a':
      return elementsIndex.index()
      break
    case 's':
      return elementsIndex.index()
      break
    case 'p':
      return elementsIndex.index()
      break

    default:
      return newProject.index(templatePath)
      break
  }
}

console.clear()
initLoad()
