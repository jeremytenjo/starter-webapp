import { spawn } from 'child_process'

import * as React from 'react'
// https://github.com/vadimdemedes/ink
import { render, Text, Box, useInput } from 'ink'
import qrcode from 'qrcode-terminal'
import tcpPortUsed from 'tcp-port-used'

import getIpAdress from '../node/getIpAdress.js'

console.clear()

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
  const commandsAreRunning = await Promise.all(
    commands.map(async (command) => {
      const commandIsRunning = await tcpPortUsed.check(command.port)
      return commandIsRunning
    }),
  )

  // if all commands are running return onCommandsRunning
  if (!commandsAreRunning.includes(false)) {
    console.log('All commands are running in another tab')
    onCommandsRunning && onCommandsRunning()
    return
  }

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
    const [runningInAnotherTab, setRunningInAnotherTab] = React.useState(false)
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

    const initialize = async () => {
      const commandIsRunning = await tcpPortUsed.check(port)
      if (commandIsRunning) setRunningInAnotherTab(true)
      else startCommand()
    }

    React.useEffect(() => {
      initialize()
    }, [setOutput])

    const CommandRunning = () => {
      return <Text>Command running in another tab</Text>
    }

    const CommandOutput = () => {
      return (
        <>
          <Box marginTop={1}>
            <Text>{output}</Text>
          </Box>
        </>
      )
    }

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
            {!runningInAnotherTab && (
              <Text dimColor>Press {restardInput} to restart</Text>
            )}
            {!disableQRCode && <Text>{qrcodeString}</Text>}
          </>
        )}

        {runningInAnotherTab ? <CommandRunning /> : <CommandOutput />}
      </Box>
    )
  }

  render(<SubprocessOutput />)
}
