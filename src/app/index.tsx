import * as React from 'react'
// import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { Global } from '@emotion/core'
// import { withTheme } from 'emotion-theming'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'

import * as i18n from 'services/i18n'

import Home from 'pages/home'
// const Home = React.lazy(() => import(/* webpackChunkName: "home" */ 'pages/home'))
const About = React.lazy(() => import(/* webpackChunkName: "about" */ 'pages/about'))
const Topics = React.lazy(() => import(/* webpackChunkName: "topics" */ 'pages/topics'))
const Context = React.lazy(() => import(/* webpackChunkName: "context" */ 'pages/context'))
const Counter = React.lazy(() => import(/* webpackChunkName: "counter" */ 'pages/counter'))
const NoMatch = React.lazy(() => import(/* webpackChunkName: "nomatch" */ 'pages/nomatch'))

const StyledContainer = styled.div`
  padding: 15px;
`

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const StyledLink = styled(NavLink)`
  color: blue;
  text-decoration: none;

  &.active {
    color: red;
  }
`

import GlobalStyle from './styles'

export default class App extends React.Component<{}, {}> {

  componentDidMount () {
    i18n.init()
  }

  componentWillUnmount () {
    i18n.unload()
  }

  render () {
    return (
      <React.Fragment>
        <Router>
          <StyledContainer>
            <StyledList>
              <li><StyledLink to='/' exact>Home</StyledLink></li>
              <li><StyledLink to='/about'>About</StyledLink></li>
              <li><StyledLink to='/topics'>Topics</StyledLink></li>
              <li><StyledLink to='/context'>Context</StyledLink></li>
              <li><StyledLink to='/counter'>Counter</StyledLink></li>
              <li><StyledLink to='/error-page'>Page not found (code 404)</StyledLink></li>
            </StyledList>

            <hr />

            <React.Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/about' render={(props: any) => <About {...props} />} />
                <Route path='/context' render={(props: any) => <Context {...props} />} />
                <Route path='/topics' render={(props: any) => <Topics {...props} />} />
                <Route path='/counter' render={(props: any) => <Counter {...props} />} />
                <Route path='*' render={(props: any) => <NoMatch {...props} />} exact />
              </Switch>
            </React.Suspense>
          </StyledContainer>
        </Router>

        <ThemeProvider theme={{ whiteColor: true, fontFamily: 'Helvetica Neue' }}>
          <Global styles={GlobalStyle} />
        </ThemeProvider>

        {/*
        <ThemeProvider theme={{ whiteColor: true, fontFamily: 'Helvetica Neue' }}>
          <GlobalStyle />
        </ThemeProvider>
        */}
      </React.Fragment>
    )
  }

}
