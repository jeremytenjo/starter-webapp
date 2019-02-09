const onlyViewsScriptModule = require('./gaFunctions/onlyViewsScript')
const { onlyViewsScript } = onlyViewsScriptModule

// const onlyViewsScriptModule = require('./gaFunctions/onlyViewsScript')

// Manifest
const gAnalyticsManifest = {
  trackingId: 'UA-134155158-1',
}

// Funcitons
const gAnalyticFunctions = {
  onlyViewsScript: onlyViewsScript(gAnalyticsManifest.trackingId),
}

module.exports = { gAnalyticsManifest, gAnalyticFunctions }
