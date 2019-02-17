export default (colorSet) => {
  let colorKey = ''
  let colorValue = ''
  let colorCollection = []

  for (const color in colorSet) {
    colorKey = `--color-${color}`
    colorKey = colorKey.replace(/ /g, '')
    colorValue = colorSet[color]

    document.documentElement.style.setProperty(colorKey, colorValue)
    colorCollection.push({ colorKey, colorValue })
  }

  return colorCollection
}
