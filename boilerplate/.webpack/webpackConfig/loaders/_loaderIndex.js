const eslint = require('./loaderEslint')
const babel = require('./loaderBabel')
const css = require('./loaderCss')
const fonts = require('./loaderFonts')
const images = require('./loaderImages')

module.exports = [babel, eslint, css, fonts, images]
