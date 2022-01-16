const files = [
  {
    path: ({ name }) => `${name}.ts`,
    template: ({ name }) => `export default function ${name}() {}`,
  },
]

const template = {
  type: 'Function',
  files,
}

module.exports = {
  files,
  template,
}
