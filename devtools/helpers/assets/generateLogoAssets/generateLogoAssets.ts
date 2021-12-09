import path from 'path'

import generateIcons from '../../../utils/generateIcons.js'
import type { IconType } from '../../../utils/generateIcons.js'

export default async function generateLogoAssets() {
  const rootPath = path.join(process.cwd(), 'public', 'logo')
  const logoPath = path.join(rootPath, 'logo.svg')
  const folderOutputPath = path.join(rootPath, 'assets')
  const applePath = path.join(folderOutputPath, 'apple')
  const iconsPath = path.join(folderOutputPath, 'icons')

  const iconList = [
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
  ] as IconType[]

  await Promise.all(
    iconList.map(async (icon) => {
      await generateIcons(logoPath, icon)
    }),
  )
}
