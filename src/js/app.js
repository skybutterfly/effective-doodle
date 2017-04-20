import React from "react";
import ReactDOM from "react-dom";

import Input from "./Input";
import Title from "./Title";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle = (title) => {
    this.setState({title});
  };

  render() {
    return (
      <div>
        <Title title={this.state.title} />
        <Input changeTitle={this.changeTitle} title={this.state.title} />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
