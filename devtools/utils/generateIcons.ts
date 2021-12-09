export type IconType = {
  outputPath: string
  name: string
  format: string
  width: number
  height: number
}

export default function generateIcons(iconPath: string, iconData: IconType) {
  console.log({ iconPath, iconData })
}
