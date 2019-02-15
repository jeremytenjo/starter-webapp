const figamValues = require('./Figma/theme.json')

const { colors, fontSizes, fonts } = figamValues

const themeManifest = {
  colors,
  fontSizes,
  fonts,
  transitions: {
    duration: '0.2s',
  },
}

// Exports
exports.ThemeManifest = themeManifest
