import React from "react";

export default class Input extends React.Component {
  /*handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }*/

  handleChange = (el) => {
    const text = el.target.value;
    this.props.changeTitle(text);
  };

  render() {
    return (

        <input value={this.props.title} onChange={this.handleChange} />

    );
  }
}
