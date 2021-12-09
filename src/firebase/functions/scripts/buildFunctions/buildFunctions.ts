import path from 'path'

import esbuild from 'esbuild'

import getCommandLineArgs from './handlers/getCommandLineArgs.js'
import removeBuildFolder from './handlers/removeBuildFolder.js'

export default async function buildFunctions() {
  const args = getCommandLineArgs()
  const rootPath = path.join(process.cwd(), 'src', 'firebase', 'functions')
  const entryPoint = path.join(rootPath, 'src', 'index.js')
  const outfile = path.join(rootPath, 'build', 'index.js')

  await removeBuildFolder({ rootPath })

  esbuild.build({
    entryPoints: [entryPoint],
    outfile,
    platform: 'browser',
    bundle: true,
    minify: true,
    format: 'esm',
    target: ['es2017'],
    watch: args.watch,
    external: ['firebase-admin', 'firebase-functions'],
  })
}
