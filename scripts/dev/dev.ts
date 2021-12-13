// import shell from '../../devtools/utils/node/shell.cjs'
import commandDashboard from '../../devtools/utils/terminal/commandDashboard.js'

export default async function dev() {
  const commands = [
    {
      label: 'Vite',
      command: 'npm run app:dev',
    },
    {
      label: 'Storybook',
      command: 'npm run storybook:dev',
    },
    {
      label: 'Firebase Emulators',
      command: 'npm run functions:dev',
    },
  ]
  commandDashboard({ commands })
  // shell(['npm run app:dev', 'npm run emulators:start'])
}
