const shell = require('shelljs')

exports.index = function(boileplatePath, params) {
  const projectName = params.p2 || 'Webapp-project'
  const currentDir = shell.pwd().stdout
  const boileplateDir = boileplatePath

  console.log('Creating ' + projectName + '...')

  // 1. Copy boileplate to current folder
  shell.cp('-R', boileplateDir, currentDir)

  // 2. Change name to prject name
  shell.mv('boilerplate', projectName)

  console.log(projectName + ' created!')
}
