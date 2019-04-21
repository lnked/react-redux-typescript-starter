import * as React from 'react';
import { Router } from 'react-router-dom';
import { Global } from '@emotion/core';
import { hot } from 'react-hot-loader/root';

import * as i18n from 'i18n';

import { Consumer } from 'store';
import { CoreLayout } from 'layouts';
import { browserHistory } from 'utils';
import { ErrorBoundary } from 'components';

import Switcher from './routes';
import GlobalStyle from './styles';

export interface OuterProps {
  history?: {
    location: any,
  };
}

class App extends React.Component<OuterProps, {}> {

  timeout: any = null;

  componentDidMount () {
    i18n.init();
  }

  componentWillUnmount () {
    i18n.unload();
  }

  render () {
    return (
      <ErrorBoundary>
        <Router history={browserHistory}>
          <CoreLayout>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Consumer>
                {context => <Switcher {...context} />}
              </Consumer>
            </React.Suspense>
          </CoreLayout>

          <Global styles={GlobalStyle} />
        </Router>
      </ErrorBoundary>
    );
  }

}

export default hot(App);
