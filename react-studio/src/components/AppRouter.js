import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LoginComponent from './LoginComponent'
import { CounterWithNameAndSideEffect } from './HookComponent'

function Index() {
  return <p>Home</p>
}

function About() {
  return <p>About</p>
}

class Users extends React.Component {
  constructor(props) {
    super(props)

    const { match, location } = props

    console.log('-------------------------props')
    console.log(match)
    console.log(location)
    console.log(match.params)
  }

  render() {
    const { match } = this.props
    return <p>Users {match.params.id}</p>
  }
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/users/123">Users 123</Link>
            </li>
            <li>
              <Link to="/hooks/">hooks</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={LoginComponent} />
        <Route path="/about/" component={About} />
        <Route exact path="/users/" component={Users} />
        <Route exact path="/users/:id" component={Users} />
        <Route path="/hooks/" component={CounterWithNameAndSideEffect} />
      </div>
    </Router>
  )
}

export default AppRouter
