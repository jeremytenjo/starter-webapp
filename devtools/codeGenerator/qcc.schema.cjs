/**
 * Input `useDataStore` returns `dataStore`
 */
const generateUseVariable = (string) => {
  let newValue = string.substring(3)
  newValue = newValue.charAt(0).toLowerCase() + newValue.slice(1)

  return newValue
}

const component = {
  type: 'Simple Component',
  files: [
    {
      path: ({ name }) => `${name}.tsx`,
      template: ({ name, helpers }) => `        
      import Box from 'lib/components/Box'

      import * as styles from './styles'

      export default function ${helpers.changeCase.pascalCase(name)}() {
        return (
          <Box sx={styles.wrapper}>
           ${name}
          </Box>
        );
      }
        `,
    },
    {
      path: () => `styles.ts`,
      template: () => `
      export const wrapper = {}
        `,
    },
    {
      path: () => `stories/sb.stories.mdx`,
      template: ({ name }) => `import { Meta, Story } from '@storybook/addon-docs/blocks'
import ${name} from '../${name}'
      
<Meta 
  title='Lib/components/${name}' 
  component={${name}} 
  argTypes={{}} 
  args={{}} 
/>

# ${name}

export const Template = (args) => (
  <${name} {...args}>
    ${name}
  </${name}>
)

<Story name='default' argTypes={{}} args={{}}>
  {Template.bind({})}
</Story>
`,
    },
  ],
}

const componentWithStory = {
  type: 'Complete Component',
  files: [
    {
      path: ({ name }) => `${name}.tsx`,
      template: ({ name }) => `        
      import use${name}Data from './use${name}Data'
      import Ui from './ui/ui'
      
      export default function ${name}(props) {
        const data = use${name}Data({ props })
        return <Ui {...props} {...data} />
      }
        `,
    },
    {
      path: () => `ui/ui.tsx`,
      template: ({ name, helpers }) => `        
      import * as S from './styles'

      export default function ${helpers.changeCase.pascalCase(name)}() {
        return (
          <S.Wrapper>
           ${name}
          </S.Wrapper> 
        );
      }
        `,
    },
    {
      path: () => `ui/styles.ts`,
      template: ({ helpers }) => `        
      import styled from 'styled-components'

      export const Wrapper = styled.div${helpers.addEmptyTemplateLiteral()}
        `,
    },
    {
      path: ({ name }) => `use${name}Data/index.ts`,
      template: ({ name }) => `        
      export default function use${name}Data({ props }) {
        console.log(props)
        return {}
      }
        `,
    },
    {
      path: () => `stories/sb.stories.mdx`,
      template: ({ name }) => `import { Meta } from '@storybook/addon-docs/blocks'
import ${name} from '../${name}'
      
<Meta title='Lib/components${name}' component={${name}} argTypes={{}} args={{}} />

# ${name}

export const Template = (args) => (
  <${name} {...args}>
    ${name}
  </${name}>
)

<Story name='default' argTypes={{}} args={{}}>
  {Template.bind({})}
</Story>
`,
    },
  ],
}

module.exports = [
  component,
  componentWithStory,
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
        template: ({ name }) => `import ${name}Ui from './${name}Ui'
        
        export default function ${name}() {        
          return <${name}Ui />
        }`,
      },
      {
        path: ({ name }) => `${name}Ui/index.ts`,
        template: ({ name }) => `import Box from 'lib/components/Box'

        import * as styles from './styles'
        
        export default function ${name}Ui() {        
          return (
            <Box sx={styles.wrapper}>
              hello
            </Box>
          )
        }`,
      },
      {
        path: ({ name }) => `${name}Ui/styles.ts`,
        template: () => `export const wrapper = {}`,
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
