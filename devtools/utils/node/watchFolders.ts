import nodeWatch from 'node-watch'

/**
 * [Docs](https://github.com/yuanchuan/node-watch)
 * 
 * @example
 *  const folderToWatch = path.join(process.cwd(), 'src')
    watchFolders({
      folderToWatch,
      onChange: runPlaywrightTests,
    })
 */
export default function watchFolders({ folderToWatch, onChange }) {
  nodeWatch(folderToWatch, { recursive: true }, onChange)
}
