import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { setConfig } from 'react-hot-loader'

import { environment } from 'settings'

import App from 'app'

setConfig({
  pureSFC: true,
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true // RHL will not change render method
})

ReactDOM.render(<App />, document.getElementById('app-root'))

if (environment.development && module.hot) {
  module.hot.accept()
} else if (environment.production) {
  const isHttps = location.protocol.includes('https')

  if ('serviceWorker' in navigator && isHttps) {
    navigator.serviceWorker.register('/sw.js')
  }
}
