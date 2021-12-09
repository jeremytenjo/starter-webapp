export type IconType = {
  outputPath: string
  name: string
  format: string
  width: number
  height: number
}

export default function generateIcons(iconToConvertPath: string, iconData: IconType) {
  console.log({ iconToConvertPath, iconData })
}
