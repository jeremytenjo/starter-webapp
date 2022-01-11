const path = require('path')

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
  import Box from '@mui/material/Box'

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

const functionTemplate = {
  type: 'Function',
  files: [
    {
      path: ({ name }) => `${name}.ts`,
      template: ({ name }) => `export default function ${name}() {}`,
    },
  ],
}

const container = {
  type: 'Container',
  files: [
    {
      path: ({ name }) => `${name}.tsx`,
      template: ({ name }) => `import React from 'react'
      
      import ${name}Ui from './${name}Ui/${name}.ui'

      type Props = { 
        loading: boolean 
        empty: boolean 
      }
      
      export default function ${name}() {        
        return <${name}Ui />
      }`,
    },
    {
      path: ({ name }) => `${name}Ui/${name}.ui.tsx`,
      template: ({ name }) => `import React from 'react'
      import Box from '@mui/material/Box'

      export default function ${name}Ui() {        
        return (
          <Box>
            hello
          </Box>
        )
      }`,
    },
  ],
}

const page = {
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
}

const globalState = {
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
}

const asyncHook = {
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
}

const cloudFunction = {
  path: ({ name }) => path.join(process.cwd(), 'functions', 'src', name, `${name}.tsx`),
  template: ({ name, helpers }) => `
  export default function ${helpers.changeCase.pascalCase(name)}() {
    return 'hello'
  }
    `,
}
const cloudFunctionStory = {
  path: ({ name }) =>
    path.join(process.cwd(), 'functions', 'src', name, 'stories', `sb.stories.tsx`),
  template: ({ name }) => `//https://storybook.js.org/docs/react/writing-docs/docs-page
  import React from 'react'
  
  import FirebaseFunctionDashboard from '../../../../src/lib/components/firebase/FirebaseFunctionDashboard/FirebaseFunctionDashboard'
  
  import Docs from './docs.mdx'
  
  export default {
    title: 'functions/${name}',
    args: {},
    // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
    parameters: {
      docs: {
        page: Docs,
      },
    },
  }
  
  const Template = (args) => {
    return <FirebaseFunctionDashboard functionName='${name}' payload={args} />
  }
  
  export const Example = Template.bind({})`,
}
const cloudFunctionStoryDocs = {
  path: ({ name }) =>
    path.join(process.cwd(), 'functions', 'src', name, 'stories', `docs.mdx`),
  template: ({ name }) => `# ${name}`,
}

const cloudFunctionTemplate = {
  type: 'Cloud Function',
  files: [cloudFunction, cloudFunctionStory, cloudFunctionStoryDocs],
  options: {
    createNamedFolder: false,
  },
}

module.exports = [
  componentTemplate,
  componentwithStory,
  storyTemplate,
  functionTemplate,
  container,
  page,
  globalState,
  asyncHook,
  cloudFunctionTemplate,
]
