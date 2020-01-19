import React from "react";

export class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: "Cristiano", lang: "Python" };
  }

  updateCount = () => {
    this.setState((state, props) => {
      return { count: state.count + 1 };
    }, this.callback);
  };

  callback = () => {
    console.log("callback called....");
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  onChangeSelect = e => {
    const lang = e.target.value;
    console.log(lang);
    this.setState({ lang: lang });
  };

  render() {
    return (
      <div>
        <p>
          Hi {this.state.name} you clicked {this.state.count} times
        </p>
        <button onClick={() => this.updateCount()}>Click me</button>&nbsp;
        <select
          name="languages"
          onChange={this.onChangeSelect}
          value={this.state.lang}
        >
          <option value="C#">C#</option>
          <option value="Javascript">Javascript</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>
        <div>{this.state.name}</div>
      </div>
    );
  }
}
