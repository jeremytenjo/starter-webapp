import commandDashboard from '../../devtools/utils/terminal/commandDashboard.js'
import appConfig from '../../app.config.js'
import type { CommandProps } from '../../devtools/utils/terminal/commandDashboard.js'

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
    {
      label: `Firebase Emulators`,
      command: `npm run emulators:start `,
      port: 4002,
      color: '#FFCB2E',
    },
  ]

  commandDashboard({ commands })
}
