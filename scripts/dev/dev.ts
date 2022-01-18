import shellDashboard from '../../devtools/utils/terminal/shellDashboard.js'
import getAppConfig from '../../app.config.js'
import type { CommandProps } from '../../devtools/utils/terminal/shellDashboard.js'
import firebaseJson from '../../firebase.json'

type Props = {
  onReady?: () => any
}

export default async function dev({ onReady }: Props = { onReady: undefined }) {
  const appConfig = await getAppConfig()

  const commands: CommandProps[] = [
    {
      label: 'Vite',
      command: 'npm run app:dev',
      ports: [appConfig.server.local.port],
      color: '#01BF81',
    },
    {
      label: `Storybook`,
      command: `npm run storybook:dev`,
      ports: [6007],
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
      ports: [
        4000,
        firebaseJson.emulators.firestore.port,
        firebaseJson.emulators.auth.port,
        firebaseJson.emulators.functions.port,
      ],
      color: '#FFCB2E',
      disableQRCode: true,
      onCommandRunning: async () => {
        const addEmulatorData = await import(
          '../../src/services/firebase/emulator/addEmulatorData/addEmulatorData.js'
        )
        addEmulatorData.default()
      },
    })
  }

  shellDashboard({ commands, onCommandsRunning: onReady })
}
