---
to: features/<%= name %>.index.js
---
<%_ compName = name.split('/') _%>
<%_ compName = compName[compName.length - 1] _%>
<%_ compNameUpper = compName.charAt(0).toUpperCase() + compName.slice(1); _%>
// Functions

// Ui
import <%= compNameUpper %> from './<%= compName %>.comp'

// Exports
export { <%= compNameUpper %> }