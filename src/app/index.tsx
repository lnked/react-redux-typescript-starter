import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Router, RouteComponentProps } from 'react-router-dom'
import { Global } from '@emotion/core'
import { hot } from 'react-hot-loader/root'

import * as i18n from 'services/i18n'

import Theme from 'theme'
import { ErrorBoundary } from 'components'

import Routes from './routes'
import Navigation from './navigation'
import GlobalStyle, { StyledContainer } from './styles'

export interface OuterProps {
  history: {
    location: any,
  };
}

class App extends React.Component<OuterProps, {}> {
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
    const { history } = this.props

    return (
      <ErrorBoundary>
        <Router history={history}>
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
