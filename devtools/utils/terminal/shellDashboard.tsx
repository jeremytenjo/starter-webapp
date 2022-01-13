import { spawn } from 'child_process'

import * as React from 'react'
// https://github.com/vadimdemedes/ink
import { render, Text, Box, useInput } from 'ink'
import qrcode from 'qrcode-terminal'
import tcpPortUsed from 'tcp-port-used'

import getIpAdress from '../node/getIpAdress.js'

// console.clear()

export type Props = {
  commands: CommandProps[]
  onCommandsRunning?: () => null
}

export type CommandProps = {
  label: string
  command: string
  port?: number
  color?: string
  index?: number
  disableQRCode?: boolean
  onStart?: () => any
}

export default async function shellDashboard({ commands, onCommandsRunning }: Props) {
  // check if running
  let commandsAreRunning = false
  await Promise.all(
    commands.map(async (command) => {
      const commandIsRunning = await tcpPortUsed.check(command.port)
      if (commandIsRunning) {
        console.clear()
        console.log('Dev commands running in another tab')
        onCommandsRunning && onCommandsRunning()
        commandsAreRunning = true
      }
    }),
  )

  if (commandsAreRunning) return

  // handle onCommandsRunning callback
  const commandsRunning = []
  if (onCommandsRunning) {
    Promise.all(
      commands.map(async (command) => {
        await tcpPortUsed.waitUntilUsed(command.port, 200, 200000)
        commandsRunning.push(command.label)

        if (commandsRunning.length === commands.length) {
          onCommandsRunning()
        }
      }),
    )
  }

  // output commands
  const SubprocessOutput = () => {
    return (
      <Box flexDirection='row'>
        {commands.map((arg, index) => (
          <Command key={arg.label} {...arg} index={index} />
        ))}
      </Box>
    )
  }

  const Command = ({
    label,
    command,
    port,
    color,
    index,
    disableQRCode,
    onStart = () => null,
  }: CommandProps) => {
    const shellRef = React.useRef(null)
    const [output, setOutput] = React.useState('')
    const [qrcodeString, setQrcodeString] = React.useState('')
    const restardInput = (index + 1).toString()
    const networkUrl = `http://${getIpAdress()}:${port}`

    useInput((input) => {
      if (input === restardInput) {
        restartCommand()
      }
    })

    const restartCommand = () => {
      shellRef.current.kill()
      startCommand()
    }

    const startCommand = () => {
      const commandArgs = command.split(' ')
      commandArgs.shift()
      const shell = spawn('npm', commandArgs)
      // https://www.npmjs.com/package/qrcode-terminal
      !disableQRCode &&
        qrcode.generate(networkUrl, { small: true }, (qr) => setQrcodeString(qr))

      // https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/
      shell.stdout.on('data', (data) => {
        const lines = data.toString('utf8')
        setOutput(lines)
      })

      shell.on('error', (error) => {
        setOutput(error.toString())
      })

      shellRef.current = shell
      onStart()
    }

    React.useEffect(() => {
      startCommand()
    }, [setOutput])

    return (
      <Box flexBasis={'100%'} flexDirection='column'>
        <Text color={color}>{label}: </Text>
        {port && (
          <>
            <Box flexDirection='row'>
              <Text dimColor>http://localhost:{port}</Text>
              <Text> - </Text>
              <Text dimColor>{networkUrl}</Text>
            </Box>
            {!disableQRCode && <Text>{qrcodeString}</Text>}
          </>
        )}
        <Text dimColor>Press {restardInput} to restart</Text>

        <Box marginTop={1}>
          <Text>{output}</Text>
        </Box>
      </Box>
    )
  }

  render(<SubprocessOutput />)
}
