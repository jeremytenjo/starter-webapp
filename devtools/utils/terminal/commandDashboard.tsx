import { spawn } from 'child_process'

import React from 'react'
// https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/
import stripAnsi from 'strip-ansi'
// https://github.com/vadimdemedes/ink
import { render, Text, Box } from 'ink'

export default function commandDashboard({ commands }) {
  const SubprocessOutput = () => {
    return (
      <Box flexDirection='row'>
        {commands.map((arg) => (
          <Command key={arg.label} label={arg.label} />
        ))}
      </Box>
    )
  }

  const Command = ({ label }) => {
    const [output, setOutput] = React.useState('')

    React.useEffect(() => {
      const wc = spawn('npm', ['install'])

      wc.stdout.on('data', (data) => {
        const lines = stripAnsi(data.toString('utf8')).split('\n')
        setOutput(lines.slice(-5).join('\n'))
      })
    }, [setOutput])

    return (
      <Box>
        <Text>{label}:</Text>
        <Box marginTop={1}>
          <Text>{output}</Text>
        </Box>
      </Box>
    )
  }

  render(<SubprocessOutput />)
}
