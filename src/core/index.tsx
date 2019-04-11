import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Global } from '@emotion/core'
import { hot } from 'react-hot-loader/root'

import * as i18n from 'i18n'

import { Consumer } from 'store'
import { ErrorBoundary } from 'components'

import Switcher from './routes'
import Navigation from './navigation'
import GlobalStyle, { StyledContainer } from './styles'

export interface OuterProps {
  history?: {
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

  // handleMouseEnter = (component: any = null) => {
  //   clearTimeout(this.timeout)
  //   this.timeout = setTimeout(() => component && component.preload && component.preload(), 250)
  // }

  render () {
    //
    return (
      <ErrorBoundary>
        <Router>
          <Global styles={GlobalStyle} />

          <StyledContainer>
            <Navigation onMouseEnter={this.handleMouseEnter} />

            <hr />

            <React.Suspense fallback={<div>Loading...</div>}>
              <Consumer>
                {context => <Switcher {...context} />}
              </Consumer>
            </React.Suspense>
          </StyledContainer>
        </Router>
      </ErrorBoundary>
    )
  }
}

export default hot(App)
