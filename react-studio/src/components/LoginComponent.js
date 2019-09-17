import React, { Fragment, Component } from 'react'
import Cat from '../data/cat.png'

class LoginComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Nome: '',
      Cognome: ''
    }
  }

  onChange = e => {
    this.setState({
      Nome: e.target.value
    })
  }

  onChange2 = e => {
    this.setState({ Cognome: e.target.value })
  }

  send = () => {
    console.log(this.state)
  }

  componentDidMount() {
    console.log('Component mounted in DOM')
  }

  render() {
    return (
      <Fragment>
        {this.props.children}
        <code className="space10">
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={this.onChange} value={this.state.Nome} />
          <label htmlFor="sname-input">Surname:</label>
          <input id="sname-input" onChange={this.onChange2} value={this.state.Cognome} />
        </code>
        <div>
          <img src={Cat} height="64px" width="64px"></img>
          <button onClick={this.send}>Invia</button>
        </div>
      </Fragment>
    )
  }
}

export default LoginComponent
