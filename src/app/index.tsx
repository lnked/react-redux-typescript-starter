import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { hot } from 'react-hot-loader/root';

import i18n, { i18nInit, i18nUnload } from 'i18n';

import { CoreLayout } from 'layouts';
import { ErrorFallback } from 'components';

import Switcher from './routes';
import { GlobalStyle } from './styles';

export interface OuterProps {}

class App extends React.Component<OuterProps, {}> {
  timeout: any = null;

  componentDidMount() {
    i18nInit();
  }

  componentWillUnmount() {
    i18nUnload();
  }

  render() {
    return (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <React.StrictMode>
          <I18nextProvider i18n={i18n}>
            <GlobalStyle />

            <Router>
              <CoreLayout>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Switcher />
                </React.Suspense>
              </CoreLayout>
            </Router>
          </I18nextProvider>
        </React.StrictMode>
      </ErrorBoundary>
    );
  }
}

export default hot(App);
