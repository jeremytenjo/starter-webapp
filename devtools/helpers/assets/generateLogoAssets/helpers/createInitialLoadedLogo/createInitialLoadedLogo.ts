import path from 'path'

import SVGO from 'svgo'
import fs from 'fs-extra'

import createFile from '../../../../../utils/node/createFile.js'
import getLogoAssetsRootPath from '../../utils/getLogoAssetsRootPath.js'

import { initialLoadedIconId } from './createInitialLoadedLogo.constants.js'

export type CreateInitialLoadedLogoProps = {
  logoPath: string
}

const getOutputPath = () => {
  const { logoAssetsRootPath } = getLogoAssetsRootPath()
  const outputPath = path.join(logoAssetsRootPath, 'initialLoadedIcon.svg')
  return outputPath
}

export default async function createInitialLoadedLogo({
  logoPath,
}: CreateInitialLoadedLogoProps) {
  const rawSvgContent = await fs.readFile(logoPath)
  const outputPath = getOutputPath()
  const size = '48'

  const { data: svgContent } = await SVGO.optimize(rawSvgContent, {
    path: logoPath,
    plugins: [
      {
        // https://github.com/svg/svgo/blob/master/plugins/removeDimensions.js
        name: 'removeDimensions',
        attributes: {
          width: false,
          height: false,
        },
      },
      {
        // https://github.com/svg/svgo/blob/master/plugins/addAttributesToSVGElement.js
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            `id="${initialLoadedIconId}"`,
            `width="${size}"`,
            `height="${size}"`,
            `style=" position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);"`,
          ],
        },
      },
      {
        // https://github.com/svg/svgo/blob/master/plugins/removeViewBox.js
        name: 'removeViewBox',
        attributes: {
          viewBox: false,
        },
      },
    ],
  })

  await createFile({ filePath: outputPath, fileContent: svgContent, nojs: true })
}

export const getinitialLoadedLogoString = async () => {
  const initialLogoPath = getOutputPath()
  const rawSvgContent = await fs.readFile(initialLogoPath)

  return rawSvgContent
}
