import { spawn } from 'child_process'

import * as React from 'react'
// https://github.com/vadimdemedes/ink
import { render, Text, Box, useInput } from 'ink'

console.clear()

export type Props = {
  commands: CommandProps[]
}

export type CommandProps = {
  label: string
  command: string
  port?: number
  color?: string
  index?: number
}

export default function shellDashboard({ commands }: Props) {
  const SubprocessOutput = () => {
    return (
      <Box flexDirection='row'>
        {commands.map((arg, index) => (
          <Command key={arg.label} {...arg} index={index} />
        ))}
      </Box>
    )
  }

  const Command = ({ label, command, port, color, index }: CommandProps) => {
    const shellRef = React.useRef(null)
    const [output, setOutput] = React.useState('')
    const restardInput = (index + 1).toString()

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

    React.useEffect(() => {
      startCommand()
    }, [setOutput])

    return (
      <Box flexBasis={'100%'} flexDirection='column'>
        <Text color={color}>{label}: </Text>
        {port && <Text dimColor>http://localhost:{port}</Text>}
        <Text dimColor>Press {restardInput} to restart</Text>

        <Box marginTop={1}>
          <Text>{output}</Text>
        </Box>
      </Box>
    )
  }

  render(<SubprocessOutput />)
}
