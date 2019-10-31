// Loads critical CSS in <head>

const { typographyResets } = require('../Typography/typography.resets')
const { formResets } = require('../Forms/forms.resets')
const { colorVars } = require('../Colors/colors.vars')
const { selection } = require('../Browser/browser.selection')
const { body } = require('../Browser/browser.body')
const { boxShadows } = require('../Shadows/boxShadows')
const { typography } = require('../Typography/typography.css')
const { mediaQueries } = require('../MediaQueries/mediaQueries')
const { scrollbar } = require('../Browser/browser.scrollbar')
const { spacing } = require('../Spacing/spacing.index')

exports.headCss = `
<style type="text/css">
${formResets}
${typographyResets}
${typography}
${scrollbar}
${mediaQueries}
${boxShadows}
${body}
${selection}
${colorVars}
${spacing}
</style>
`