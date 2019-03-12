import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter as Router } from 'react-router-dom'
import { Global } from '@emotion/core'
import { hot } from 'react-hot-loader/root'

import * as i18n from 'services/i18n'

import Theme from 'theme'
import { ErrorBoundary } from 'components'

import Routes from './routes'
import Navigation from './navigation'
import GlobalStyle, { StyledContainer } from './styles'

class App extends React.Component<{}, {}> {
  timeout: any = null

  componentDidMount () {
    i18n.init()
  }

  componentWillUnmount () {
    i18n.unload()
  }

  handleMouseEnter = (component: any = null) => {
    clearTimeout(this.timeout)

    this.timeout = setTimeout(() => component && component.preload(), 250)
  }

  render () {
    return (
      <ErrorBoundary>
        <Router>
          <ThemeProvider theme={Theme.light}>
            <Global styles={GlobalStyle} />

            <StyledContainer>
              <Navigation onMouseEnter={this.handleMouseEnter} />

              <hr />

              <React.Suspense fallback={<div>Loading...</div>}>
                <Routes />
              </React.Suspense>
            </StyledContainer>
          </ThemeProvider>
        </Router>
      </ErrorBoundary>
    )
  }
}

export default hot(App)
// export default hot(module)(App)
