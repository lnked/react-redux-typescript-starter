import * as React from 'react'
import { render } from 'react-dom'
import { setConfig } from 'react-hot-loader'

// import { Provider } from 'store'
import { environment } from 'settings'
// import configureStore from './redux/configureStore'

import App from 'app'

setConfig({
  ignoreSFC: true,
  pureRender: true,
})

// const initialState = {
//   page: {
//       type: 'home'
//   }
// }

// const store = configureStore(initialState)

// <Provider store={store}>
//   <App/>
// </Provider>

render(<App />, document.getElementById('app-root'))

if (environment.production) {
  const isHttps = location.protocol.includes('https')

  if ('serviceWorker' in navigator && isHttps) {
    navigator.serviceWorker.register('/sw.js')
  }
}

if (environment.development && module.hot) {
  module.hot.accept()
}
