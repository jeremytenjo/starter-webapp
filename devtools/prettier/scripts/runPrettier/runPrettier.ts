import shell from '../../../utils/node/shell.cjs'
;(async function runPrettier() {
  shell(
    `prettier \"**/*.{js,json,ts,tsx,jsx}\" --write --config ./devtools/prettier/prettier.config.json --ignore-path ./devtools/prettier/.prettierignore`,
  )
})()
