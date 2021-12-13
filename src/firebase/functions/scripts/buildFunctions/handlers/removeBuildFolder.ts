import path from 'path'

import removeFolder from '../../../../../../devtools/utils/node/removeFolder.cjs'

type Props = {
  rootPath: string
}

export default async function removeBuildFolder({ rootPath }: Props) {
  const buildDir = path.join(rootPath, 'build')
  await removeFolder(buildDir)
}
