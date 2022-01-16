// templates for the `Quick Component Creator` vscode plugin
// https://marketplace.visualstudio.com/items?itemName=tenjojeremy.quick-component-creator

const component = require('./templates/component')
const story = require('./templates/story')
const componentWithStory = require('./templates/componentWithStory')
const functions = require('./templates/function')
const container = require('./templates/container')
const page = require('./templates/page')
const globalState = require('./templates/globalState')
const asyncHook = require('./templates/asyncHook')
const cloudFunction = require('./templates/cloudFunction')

module.exports = [
  component.template,
  story.template,
  componentWithStory.template,
  functions.template,
  container.template,
  page.template,
  globalState.template,
  asyncHook.template,
  cloudFunction.template,
]
