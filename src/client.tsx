import * as React from 'react'
import { render } from 'react-dom'
import { setConfig } from 'react-hot-loader'

import { environment } from 'settings'
import { Provider, createStore } from 'store'

import App from 'app'

setConfig({
  ignoreSFC: true,
  pureRender: true,
})

render(
  <Provider {...createStore()}>
    <App />
  </Provider>,
  document.getElementById('app')
)

if (environment.production) {
  const isHttps = location.protocol.includes('https')

  if ('serviceWorker' in navigator && isHttps) {
    navigator.serviceWorker.register('/sw.js')
  }
}

if (environment.development && module.hot) {
  module.hot.accept()
}
