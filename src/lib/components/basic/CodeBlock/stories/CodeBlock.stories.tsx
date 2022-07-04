//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import CodeBlock, { type CodeBlockProps } from '../CodeBlock'

import Docs from './CodeBlock.docs.mdx'

const defaultArgs: CodeBlockProps = {
  code: `
  import prismicClient from '../../../lib/utils/prismic/prismicClient/prismicClient'
  import type BlogSchema from '../Blog.schema'
    
  export default async function getBlogs({ previewData = {} } = {}) {
    const BlogCategories: BlogSchema[] = (await prismicClient({
      previewData,
    }).getAllByType('Blog')) as BlogSchema[]
  
    return BlogCategories
  }
  `,
  language: 'javascript',
}

export default {
  title: 'lib/components/CodeBlock',
  args: defaultArgs,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = (args: CodeBlockProps) => {
  return (
    <>
      <CodeBlock {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: CodeBlockProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
