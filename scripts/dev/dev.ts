import commandDashboard from '../../devtools/utils/terminal/commandDashboard.js'
import appConfig from '../../app.config.js'
import type { CommandProps } from '../../devtools/utils/terminal/commandDashboard.js'
import firebaseJson from '../../firebase.json'

export default async function dev() {
  const commands: CommandProps[] = [
    {
      label: 'Vite',
      command: 'npm run app:dev',
      port: appConfig.server.local.port,
      color: '#01BF81',
    },
    {
      label: `Storybook`,
      command: `npm run storybook:dev `,
      port: 6007,
      color: '#FF4785',
    },
  ]

  if (firebaseJson.emulators) {
    const command = firebaseJson.emulators.functions.port
      ? 'npm run functions:dev'
      : 'npm run emulators:start'
    commands.push({
      label: `Firebase Emulators`,
      command,
      port: 4000,
      color: '#FFCB2E',
    })
  }

  commandDashboard({ commands })
}
