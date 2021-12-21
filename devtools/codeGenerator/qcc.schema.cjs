/**
 * Input `useDataStore` returns `dataStore`
 */
const generateUseVariable = (string) => {
  let newValue = string.substring(3)
  newValue = newValue.charAt(0).toLowerCase() + newValue.slice(1)

  return newValue
}

const component = {
  path: ({ name }) => `${name}.tsx`,
  template: ({ name, helpers }) => `import React from 'react'       
  import { Box } from '@mui/material'

  type Props = { name: string }

  export default function ${helpers.changeCase.pascalCase(name)}({ name }: Props) {
    return (
      <Box>
       ${name}
      </Box>
    );
  }
    `,
}

const story = [
  {
    path: () => `stories/docs.mdx`,
    template: ({ name }) => `# ${name}`,
  },
  {
    path: () => `stories/sb.stories.tsx`,
    template: ({ name }) => `//https://storybook.js.org/docs/react/writing-docs/docs-page
    import React from 'react'

    import ${name} from '../${name}'

    import Docs from './docs.mdx'

    export default {
      title: 'lib/components/${name}',
      args: {},
      // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
      parameters: {
        docs: {
          page: Docs,
        },
      },
    }

    const Template = (args) => {
      return <${name} {...args} />
    };

    export const Example = Template.bind({});
    Example.args = {};
`,
  },
]

const componentTemplate = {
  type: 'Component',
  files: [component],
}

const componentwithStory = {
  type: 'Component with story',
  files: [component, ...story],
}

const storyTemplate = {
  type: 'Story',
  files: [...story],
}

module.exports = [
  componentTemplate,
  componentwithStory,
  storyTemplate,
  {
    type: 'Function',
    files: [
      {
        path: ({ name }) => `${name}.ts`,
        template: ({ name }) => `export default function ${name}() {}`,
      },
    ],
  },
  {
    type: 'Container',
    files: [
      {
        path: ({ name }) => `${name}.tsx`,
        template: ({ name }) => `import ${name}Ui from './${name}Ui/${name}.ui'
        
        export default function ${name}() {        
          return <${name}Ui />
        }`,
      },
      {
        path: ({ name }) => `${name}Ui/${name}.ui.ts`,
        template: ({ name }) => `import { Box } from '@mui/material'

        export default function ${name}Ui() {        
          return (
            <Box>
              hello
            </Box>
          )
        }`,
      },
    ],
  },
  {
    type: 'Page',
    files: [
      {
        path: () => 'index.tsx',
        template: ({ name }) => `export default function ${name}Page() {
          return <>containers</>
        }`,
      },
      {
        path: () => 'routes.tsx',
        template: ({ name }) => `const ${name} = lazy(() => import('./'))

        export default function ${name}Routes() {
          return (
            <Routes>
              <Route path='/' element={<${name} />} />
            </Routes>
          )
        }`,
      },
    ],
  },
  {
    type: 'Global State',
    files: [
      {
        path: () => 'index.ts',
        template: ({ name }) => `import create from 'zustand'

        const ${name}Store = create((set) => ({
          ${generateUseVariable(`${name}`)}: true,
        
          setExample: (newValue) => set(() => ({ ${generateUseVariable(
            `${name}`,
          )}: newValue })),
        }))

        export default function ${name}() {
          const ${generateUseVariable(`${name}Store`)} = ${name}Store()

          const updateExample = (newValue) => {
            ${generateUseVariable(`${name}Store`)}.setExample(newValue)
          }

          return {
            ${generateUseVariable(`${name}`)}: ${generateUseVariable(
          `${name}Store`,
        )}.${generateUseVariable(`${name}`)},
            updateExample
          }
        }`,
      },
    ],
  },
  {
    type: 'Async Hook',
    files: [
      {
        path: () => 'index.ts',
        template: ({ name }) => `import useAsync from '@useweb/use-async'
        import useSnackbar from '../../../../../lib/components/Snackbar/useSnackbar'
        import useShowError from '../../../../../lib/components/feedback/useShowError'
        
        export default function ${name}() {
          const showError = useShowError()

          const fetcher = async () => {
            return true
          }
        
          const ${generateUseVariable(`${name}`)} = useAsync(fetcher, {
            onError: (error) => {
              showError.show({ error, message: 'Error, please try again'})
            }
            onResult: (result) => {
              console.log(result)
            }
          })
        
          return ${generateUseVariable(`${name}`)}
        }`,
      },
    ],
  },
]
