import React from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import { FormComponent } from "./FormComponent"
import { HookExample } from "./HookComponent"
import LoginComponent from "./LoginComponent"
import { TodoComponent } from "./TodoComponent"
import { BeforeUnload } from "./BeforeUnload"

class Users extends React.Component {
  constructor(props) {
    super(props)
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
              <Link to="/todo/">Todo Component with Redux</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/users/123">Users 123</Link>
            </li>
            <li>
              <Link to="/form/">Form</Link>
            </li>
            <li>
              <Link to="/hook/">Hook</Link>
            </li>
            <li>
              <Link to="/beforeunload/">BeforeUnload Example</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={LoginComponent} />
        <Route path="/todo/" component={TodoComponent} />
        <Route exact path="/users/" component={Users} />
        <Route exact path="/users/:id" component={Users} />
        <Route path="/form/" component={FormComponent} />
        <Route path="/hook/" component={HookExample} />
        <Route path="/beforeunload/" component={BeforeUnload} />
      </div>
    </Router>
  )
}

export default AppRouter
