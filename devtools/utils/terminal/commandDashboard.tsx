import { spawn } from 'child_process'

import * as React from 'react'
// https://github.com/vadimdemedes/ink
import { render, Text, Box } from 'ink'

console.clear()

export type CommandProps = {
  label: string
  command: string
  port?: number
  color?: string
}

export default function commandDashboard({ commands }) {
  const SubprocessOutput = () => {
    return (
      <Box flexDirection='row'>
        {commands.map((arg) => (
          <Command key={arg.label} {...arg} />
        ))}
      </Box>
    )
  }

  const Command = ({ label, command, port, color }: CommandProps) => {
    const [output, setOutput] = React.useState('')

    React.useEffect(() => {
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
    }, [setOutput])

    return (
      <Box flexBasis={'100%'} flexDirection='column'>
        <Text color={color}>{label}: </Text>

        {port && <Text dimColor>http://localhost:{port}</Text>}
        <Box marginTop={1}>
          <Text>{output}</Text>
        </Box>
      </Box>
    )
  }

  render(<SubprocessOutput />)
}
