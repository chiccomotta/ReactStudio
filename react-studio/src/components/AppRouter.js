import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { FormComponent } from "./FormComponent";
import { HookExample } from "./HookComponent";
import LoginComponent from "./LoginComponent";

function Index() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    return <p>Users {match.params.id}</p>;
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
              <Link to="/form/">Form</Link>
            </li>
            <li>
              <Link to="/hook/">Hook</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={LoginComponent} />
        <Route path="/about/" component={About} />
        <Route exact path="/users/" component={Users} />
        <Route exact path="/users/:id" component={Users} />
        <Route path="/form/" component={FormComponent} />
        <Route path="/hook/" component={HookExample} />
      </div>
    </Router>
  );
}

export default AppRouter;
