import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter as Router } from 'react-router-dom'
import { Global } from '@emotion/core'

import * as i18n from 'services/i18n'

import Routes from './routes'
import Navigation from './navigation'
import GlobalStyle, { StyledContainer } from './styles'

const themes = {
  dark: { whiteColor: false, fontFamily: 'Roboto, sans-serif' },
  light: { whiteColor: true, fontFamily: 'Helvetica Neue' },
}

export default class App extends React.Component<{}, {}> {
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
      <React.Fragment>
        <Router>
          <ThemeProvider theme={themes.light}>
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
      </React.Fragment>
    )
  }
}
