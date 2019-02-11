import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as serviceWorker from './service-worker'
import App from './app'

ReactDOM.render(<App />, document.getElementById('app-root'))

serviceWorker.unregister()

// <Provider store={store}>
//   <ConnectedRouter history={history}>
//     <App />
//   </ConnectedRouter>
// </Provider>

if (module.hot) {
  module.hot.accept()
}
// import { AppContainer } from 'react-hot-loader';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// const render = Component =>
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('root')
//   );

// render(App);

// // Webpack Hot Module Replacement API
// if (module.hot) module.hot.accept('./components/App', () => render(App));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// import Home from './layout/home/home';

// ReactDOM.render((
//   <BrowserRouter>
//     <App>
//       <Switch>
//         <Route exact path="/" component={Home} />
//       </Switch>
//     </App>
//   </BrowserRouter>
// ), document.getElementById('root'));
// registerServiceWorker();