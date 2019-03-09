import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'

import { lazyWithPreload } from 'utils'
import { colors } from 'settings/variables'

import * as i18n from 'services/i18n'

import Home from 'pages/home'

const Cart = lazyWithPreload(() => import(/* webpackChunkName: "cart" */ 'pages/cart'))
const About = lazyWithPreload(() => import(/* webpackChunkName: "about" */ 'pages/about'))
const Topics = lazyWithPreload(() => import(/* webpackChunkName: "topics" */ 'pages/topics'))
const Context = lazyWithPreload(() => import(/* webpackChunkName: "context" */ 'pages/context'))
const Counter = lazyWithPreload(() => import(/* webpackChunkName: "counter" */ 'pages/counter'))
const NoMatch = lazyWithPreload(() => import(/* webpackChunkName: "nomatch" */ 'pages/nomatch'))

const StyledContainer = styled.div`
  padding: 15px;
  min-height: 100vh;
  font-family: arial, sans-serif;
  color: ${(p: any) => (p.theme.whiteColor ? 'black' : 'white')};
  font-family: ${(p: any) => p.theme.fontFamily};
  background-color: ${(p: any) => (p.theme.whiteColor ? 'white' : 'black')};
`

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const StyledLink = styled(NavLink)`
  color: ${(p: any) => p.theme.whiteColor ? colors.primary : 'black'};
  padding: 2px 0;
  font-weight: 500;
  display: inline-block;
  text-decoration: none;

  &.active {
    color: ${colors.success};
  }
`

import GlobalStyle from './styles'

export default class App extends React.Component<{}, {}> {

  timeout: any = null

  componentDidMount () {
    i18n.init()
  }

  componentWillUnmount () {
    i18n.unload()
  }

  handleMouseOver = (component: any = null) => {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => component && component.preload(), 250)
  }

  render () {
    const links = [
      { label: 'Home', to: '/', exact: true },
      { label: 'About', to: '/about', component: About },
      { label: 'Cart', to: '/cart', component: Cart },
      { label: 'Topics', to: '/topics', component: Topics },
      { label: 'Context', to: '/context', component: Context },
      { label: 'Counter', to: '/counter', component: Counter },
      { label: 'Page not found (code 404)', to: '/error-page' },
    ]

    return (
      <React.Fragment>
        <Router>
          <ThemeProvider theme={{ whiteColor: true, fontFamily: 'Helvetica Neue' }}>
            <StyledContainer>
              <StyledList>
                {links && links.map(({ label, component, ...link }: any) => (
                  <li key={link.to}>
                    <StyledLink {...link} onMouseEnter={() => this.handleMouseOver(component)}>
                      {label}
                    </StyledLink>
                  </li>
                ))}
              </StyledList>

              <hr />

              <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path='/' component={Home} exact />
                  <Route path='/cart' render={(props: any) => <Cart {...props} />} />
                  <Route path='/about' render={(props: any) => <About {...props} />} />
                  <Route path='/context' render={(props: any) => <Context {...props} />} />
                  <Route path='/topics' render={(props: any) => <Topics {...props} />} />
                  <Route path='/counter' render={(props: any) => <Counter {...props} />} />
                  <Route path='*' render={(props: any) => <NoMatch {...props} />} exact />
                </Switch>
              </React.Suspense>

              <Global styles={GlobalStyle} />
            </StyledContainer>
          </ThemeProvider>
        </Router>
      </React.Fragment>
    )
  }

}
