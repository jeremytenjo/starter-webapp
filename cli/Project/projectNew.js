const shell = require('shelljs')

exports.index = function(boileplatePath, params) {
  let projectName = params.p1 || 'Webapp-project'
  const currentDir = shell.pwd().stdout
  const boileplateDir = boileplatePath
  console.log(projectName)
  console.log(currentDir)
  console.log(boileplateDir)
  // 1. Copy boileplate to current folder
  shell.cp('-R', boileplateDir, currentDir)

  // 2. Change name to prject name
  shell.mv('boileplate', projectName)
}

// const addBash = (projectName) => {
//   console.log(d)
// }
