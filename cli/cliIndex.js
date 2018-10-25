#!/usr/bin/env node
const shell = require('shelljs')
const templatePath = 'C:/Dev/Personal Projects/Webapp/template'
const elementsIndex = require('./Elements/elementsIndex.js')
const projectIndex = require('./Project/projectIndex.js')
const webpackIndex = require('./Webpack/webpackIndex.js')

const initLoad = () => {
  const currentDir = shell.pwd().stdout
  let params = {
    p1: process.argv[2],
    p2: process.argv[3]
  }

  // New Project
  if (!params.p1 && !params.p2) {
    return projectIndex.functions.projectNew.index(templatePath, params)
  }

  // Elements
  if (params.p1 === 'a' || params.p1 === 's' || params.p1 === 'p') {
    return elementsIndex.index(params)
  }

  // Wepack
  if (params.p1 === 'update' && params.p2 === 'webpack') {
    return webpackIndex.functions.webpackUpdate.index(templatePath, currentDir)
  }
}

console.clear()
initLoad()
