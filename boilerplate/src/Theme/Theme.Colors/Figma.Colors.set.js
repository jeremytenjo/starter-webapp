export default (colorSet) => {
  let colorKey = ''
  let colorValue = ''
  let colorCollection = []
  let colorUppercase = ''

  for (const color in colorSet) {
    colorUppercase = color[0].toUpperCase() + color.slice(1)
    colorKey = `--color-${colorUppercase}`
    colorKey = colorKey.replace(/ /g, '')
    colorValue = colorSet[color]

    document.documentElement.style.setProperty(colorKey, colorValue)
    colorCollection.push({ colorKey, colorValue })
  }

  return colorCollection
}
