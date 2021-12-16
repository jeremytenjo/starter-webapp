const path = require('path')

const esbuild = require('esbuild')

const getCommandLineArgs = require('./handlers/getCommandLineArgs.js')
const removeBuildFolder = require('./handlers/removeBuildFolder.js')

module.exports = async function buildFunctions() {
  const args = getCommandLineArgs()
  const rootPath = path.join(process.cwd(), 'functions')
  const entryPoint = path.join(rootPath, 'src', 'index.js')
  const outfile = path.join(rootPath, 'build', 'index.js')

  await removeBuildFolder({ rootPath })

  esbuild.build({
    entryPoints: [entryPoint],
    outfile,
    bundle: true,
    // minify: true,
    format: 'cjs',
    target: 'es2017',
    watch: args.watch,
    external: ['firebase-admin', 'firebase-functions'],
  })
}
