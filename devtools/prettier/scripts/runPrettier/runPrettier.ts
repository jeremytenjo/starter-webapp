import shell from '../../../nodeUtils/shell.js'
;(async function runPrettier() {
  shell(
    `prettier \"**/*.{js,json,ts,tsx,jsx}\" --write --config ./devtools/prettier/config.json --ignore-path ./devtools/prettier/.prettierignore`,
  )
})()
