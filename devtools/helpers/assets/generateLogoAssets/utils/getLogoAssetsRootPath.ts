import path from 'path'

export default function getLogoAssetsRootPath() {
  const rootPath = path.join(process.cwd(), 'public', 'images', 'logo')
  const logoAssetsRootPath = path.join(rootPath, 'assets')

  return { rootPath, logoAssetsRootPath }
}
