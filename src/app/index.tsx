import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import * as i18n from 'services/i18n'

import Home from 'pages/home'
// const Home = React.lazy(() => import(/* webpackChunkName: "home" */ 'pages/home'))
const About = React.lazy(() => import(/* webpackChunkName: "about" */ 'pages/about'))
const Topics = React.lazy(() => import(/* webpackChunkName: "topics" */ 'pages/topics'))
const Counter = React.lazy(() => import(/* webpackChunkName: "counter" */ 'pages/counter'))
const NoMatch = React.lazy(() => import(/* webpackChunkName: "nomatch" */ 'pages/nomatch'))

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
                {/* <Route path='/about' component={About} /> */}
                {/* <Route path='/topics' component={Topics} /> */}
                {/* <Route path='/counter' component={Counter} /> */}
                {/* <Route path='*' component={NoMatch} exact /> */}

                {/* <Route path='/' render={(props: any) => <Home {...props} />} exact /> */}
                <Route path='/about' render={(props: any) => <About {...props} />} />
                <Route path='/topics' render={(props: any) => <Topics {...props} />} />
                <Route path='/counter' render={(props: any) => <Counter {...props} />} />
                <Route path='*' render={(props: any) => <NoMatch {...props} />} exact />
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
