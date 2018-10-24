const shell = require('shelljs')

exports.index = function(templatePath, params) {
  let projectName = params.p2 || 'Webapp-project'
  const currentDir = shell.pwd().stdout
  const templateDir = templatePath
  console.log(currentDir)
  console.log(templateDir)
  // 1. Copy template to current folder
  shell.cp('-R', templateDir, currentDir)

  // 2. Change name to prject name
  shell.mv('template', projectName)
}

// const addBash = (projectName) => {
//   console.log(d)
// }
