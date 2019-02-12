import * as React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Home = React.lazy(() => import(/* webpackChunkName: 'home' */ 'pages/home'))
const About = React.lazy(() => import(/* webpackChunkName: 'about' */ 'pages/about'))
const Topics = React.lazy(() => import(/* webpackChunkName: 'topics' */ 'pages/topics'))
const Counter = React.lazy(() => import(/* webpackChunkName: 'counter' */ 'pages/counter'))
const NoMatch = React.lazy(() => import(/* webpackChunkName: 'nomatch' */ 'pages/nomatch'))

const bluegrey: string = '#2b3a44'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    font-size: 1.4rem;
    font-family: ${(p: any) => p.theme.fontFamily}
    color: ${(p: any) => (p.theme.whiteColor ? 'white' : 'black')}
    background-color: ${(p: any) => (p.theme.whiteColor ? 'black' : 'white')}
  }

  h1 {
    color: red;
    margin: 0;
    font-size: 2rem;
  }

  h2 {
    color: green;
    margin: 0;
    font-size: 1.8rem;
  }

  h3 {
    color: ${bluegrey}
    margin: 0;
    font-size: 1.6rem;
  }
`

export default class App extends React.Component<{}, {}> {

  render () {
    return (
      <React.Fragment>
        <Router>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/topics'>Topics</Link></li>
              <li><Link to='/counter'>Counter</Link></li>
              <li><Link to='/error-page'>404</Link></li>
            </ul>

            <hr />

            <React.Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/about' component={About} />
                <Route path='/topics' component={Topics} />
                <Route path='/counter' component={Counter} />
                <Route path='*' component={NoMatch} exact />
              </Switch>
            </React.Suspense>
          </div>
        </Router>

        <ThemeProvider theme={{ whiteColor: true, fontFamily: 'Helvetica Neue' }}>
          <GlobalStyle />
        </ThemeProvider>
      </React.Fragment>
    )
  }

}
