export default (colors) => {
  let colorKey = ''
  let colorValue = ''

  for (const color in colors) {
    colorKey = `--color-${color}`
    colorKey = colorKey.replace(/ /g, '')
    colorValue = colors[color]

    document.documentElement.style.setProperty(colorKey, colorValue)
  }
}
