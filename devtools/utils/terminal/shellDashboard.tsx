import { spawn } from 'child_process'

import * as React from 'react'
// https://github.com/vadimdemedes/ink
import { render, Text, Box, useInput } from 'ink'
import qrcode from 'qrcode-terminal'
import { killPortProcess } from 'kill-port-process'

import getIpAdress from '../node/getIpAdress.js'

import onPortsRunning from './onPortsRunning.js'

console.clear()

export type Props = {
  commands: CommandProps[]
  onCommandsRunning?: () => null
}

export type CommandProps = {
  label: string
  command: string
  ports: number[]
  color?: string
  index?: number
  enableQRCode?: boolean
  onCommandRunning?: () => any
}

let commandsRunningTriggered = false

export default async function shellDashboard({ commands, onCommandsRunning }: Props) {
  const ports = commands.map((command) => command.ports).flat(1)

  try {
    await killPortProcess(ports)

    const triggerCommandsRunning = () => {
      if (!commandsRunningTriggered && onCommandsRunning) {
        onCommandsRunning()
        commandsRunningTriggered = true
      }
    }

    onPortsRunning({ ports, onRunning: triggerCommandsRunning })

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
      ports,
      color,
      index,
      enableQRCode,
      onCommandRunning = () => null,
    }: CommandProps) => {
      const [port] = ports
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
        if (shellRef.current) {
          shellRef.current.kill()
          startCommand()
        }
      }

      const startCommand = () => {
        const commandArgs = command.split(' ')
        commandArgs.shift()
        const shell = spawn('npm', commandArgs)
        // https://www.npmjs.com/package/qrcode-terminal
        enableQRCode &&
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
      }

      const initialize = async () => {
        startCommand()
        onPortsRunning({ ports, onRunning: onCommandRunning })
      }

      React.useEffect(() => {
        initialize()
      }, [setOutput])

      return (
        <Box flexBasis={'100%'} flexDirection='column'>
          <Text color={color}>{label}: </Text>

          <Box flexDirection='row'>
            <Text dimColor>http://localhost:{port}</Text>
            <Text> - </Text>
            <Text dimColor>{networkUrl}</Text>
          </Box>

          <Text dimColor>Press {restardInput} to restart</Text>

          {enableQRCode && <Text>{qrcodeString}</Text>}

          <Box marginTop={1}>
            <Text>{output}</Text>
          </Box>
        </Box>
      )
    }

    render(<SubprocessOutput />)
  } catch (error) {
    await killPortProcess(ports)
    throw new Error(error)
  }
}
