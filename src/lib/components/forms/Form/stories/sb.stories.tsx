//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import Form from '../Form'
import Textfield from '../../TextField/TextField'

import Docs from './docs.mdx'

export default {
  title: 'lib/components/Forms/Form',
  args: {},
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = (args) => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Textfield name='test-textfield' />
    </Form>
  )
}

export const Example = Template.bind({})
Example.args = {}
