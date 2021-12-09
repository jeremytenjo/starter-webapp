type Props = {
  logoPath: string
  folderOutputPath: string
}

type AssetListItem = {
  outputPath: string
  name: string
  format: string
  width: number
  height: number
}

export default function generateLogoAssets({
  logoPath = 'pubic/logo/logo.svg',
  folderOutputPath = 'public/logo/assets',
}: Props) {
  const applePath = 'apple'
  const iconsPath = 'icons'
  const assetsList = [
    {
      outputPath: applePath,
      name: 'apple-touch-icon',
      format: 'png',
      width: 152,
      height: 152,
    },
    {
      outputPath: iconsPath,
      name: '152x152',
      format: 'png',
      width: 152,
      height: 152,
    },
    {
      outputPath: iconsPath,
      name: '192x192',
      format: 'png',
      width: 192,
      height: 192,
    },
    {
      outputPath: iconsPath,
      name: '256x256',
      format: 'png',
      width: 256,
      height: 256,
    },
    {
      outputPath: iconsPath,
      name: '384x384',
      format: 'png',
      width: 384,
      height: 384,
    },
    {
      outputPath: iconsPath,
      name: '512x512',
      format: 'png',
      width: 512,
      height: 512,
    },
  ] as AssetListItem[]
  // generate apple icons
  //   - apple touch ison
  // - 152x152.png
  // - 192x192.png
  // - 256x256.png
  // - 384x384.png
  // - 512x512.png
  // - logo.png
}
