const figamValues = require('./Figma/theme.json')

const { colors, fonts, textStyles } = figamValues

const themeManifest = {
  colors,
  textStyles,
  fonts,
  transitions: {
    duration: '0.2s',
  },
}

// Exports
exports.ThemeManifest = themeManifest
