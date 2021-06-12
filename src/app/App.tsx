import React, { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18n, { i18nInit, i18nUnload } from '@i18n/index';

import { ErrorFallback } from '@components/ErrorFallback';
import { CoreLayout } from '@layouts/CoreLayout';

import Switcher from '@app/Switcher';
import { GlobalStyle } from '@app/styles';

function App() {
  useEffect(() => {
    i18nInit();

    return i18nUnload;
  });

  return (
    <ErrorBoundary FallbackComponent={() => <ErrorFallback />}>
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <GlobalStyle />

          <Router>
            <CoreLayout>
              <React.Suspense fallback={null}>
                <Switcher />
              </React.Suspense>
            </CoreLayout>
          </Router>
        </I18nextProvider>
      </React.StrictMode>
    </ErrorBoundary>
  );
}

export default App;
