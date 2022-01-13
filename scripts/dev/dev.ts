import tcpPortUsed from 'tcp-port-used'

import shellDashboard from '../../devtools/utils/terminal/shellDashboard.js'
import appConfig from '../../app.config.js'
import type { CommandProps } from '../../devtools/utils/terminal/shellDashboard.js'
import firebaseJson from '../../firebase.json'

type Props = {
  onReady?: () => any
}

export default async function dev({ onReady }: Props = { onReady: undefined }) {
  const commands: CommandProps[] = [
    {
      label: 'Vite',
      command: 'npm run app:dev',
      port: appConfig.server.local.port,
      color: '#01BF81',
    },
    {
      label: `Storybook`,
      command: `npm run storybook:dev`,
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
      disableQRCode: true,
      onStart: async () => {
        await tcpPortUsed.waitUntilUsed(firebaseJson.emulators.auth.port, 200, 200000)
        const addEmulatorData = await import(
          '../../src/services/firebase/emulator/addEmulatorData/addEmulatorData.js'
        )
        addEmulatorData.default()
      },
    })
  }

  shellDashboard({ commands, onCommandsRunning: onReady })
}
