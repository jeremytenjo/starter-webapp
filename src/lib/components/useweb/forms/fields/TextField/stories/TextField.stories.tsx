import React from 'react'
import Form from '@useweb/ui/Form'
import TextField from '@useweb/ui/Textfield'

export default {
  title: 'lib/components/Forms/TextField',
  args: {},
}

const Template = (args) => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Form onSubmit={onSubmit}>
      <TextField {...args} />
    </Form>
  )
}

export const Example = Template.bind({}) as any
Example.args = {
  name: 'test',
  placeholder: 'Input Here',
}
