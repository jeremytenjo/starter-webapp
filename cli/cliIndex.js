#!/usr/bin/env node
const shell = require('shelljs')
const boilerplatePath = 'C:/Dev/Personal Projects/Webapp/boilerplate'
const elementsIndex = require('./Elements/elementsIndex.js')
const projectIndex = require('./Project/projectIndex.js')
const webpackIndex = require('./Webpack/webpackIndex.js')
const babelIndex = require('./Babel/babelIndex.js')

const initLoad = () => {
  const currentDir = shell.pwd().stdout
  const params = {
    p1: process.argv[2],
    p2: process.argv[3]
  }
  // console.log(params)

  // New Project
  if (params.p1 === 'new' && params.p2) {
    return projectIndex.functions.projectNew.index(boilerplatePath, params)
  }

  // Elements
  if (params.p1 === 'a' || params.p1 === 's' || params.p1 === 'p' || params.p1 === 'm') {
    return elementsIndex.index(params)
  }

  // Webpack
  if (params.p1 === 'update' && params.p2 === 'webpack') {
    return webpackIndex.functions.webpackUpdate.index(boilerplatePath, currentDir)
  }

  // Babel
  if (params.p1 === 'update' && params.p2 === 'babel') {
    return babelIndex.functions.babelUpdate.index(boilerplatePath, currentDir)
  }
}

console.clear()
initLoad()
