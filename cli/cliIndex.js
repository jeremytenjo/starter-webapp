#!/usr/bin/env node
const templatePath = 'C:/Dev/Personal Projects/Webapp/template'
const elementsIndex = require('./Elements/elementsIndex.js')
const projectIndex = require('./Project/projectIndex.js')
const webpackIndex = require('./Webpack/webpackIndex.js')

const initLoad = () => {
  let params = {
    p1: process.argv[2],
    p2: process.argv[3]
  }

  // New Project
  if (!param1 && !param2) {
    return projectIndex.functions.projectNew(templatePath, params)
  }

  // Elements
  if (param1 === 'a' || param1 === 's' || param1 === 'p') {
    return elementsIndex.index(params)
  }

  // Wepack
  if (param1 === 'update' && param2 === 'webpack') {
    return webpackIndex.functions.webpackUpdate(templatePath, params)
  }
}

console.clear()
initLoad()
