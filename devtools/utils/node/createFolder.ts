import fs from 'fs-extra'

type Props = {
  paths: string[]
}

export default async function createFolder({ paths }: Props) {
  await Promise.all(
    paths.map(async (path) => {
      await fs.ensureDirSync(path)
    }),
  )
}
