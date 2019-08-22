import React from 'react'
import ReactDOM from 'react-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import App from './src.app'

OfflinePluginRuntime.install()

ReactDOM.render(<App />, document.getElementById('root'))
