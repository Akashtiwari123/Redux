import React, { Component } from "react";

class Persons extends Component {
  state = {
    Person: []
  };
  render() {
    return (
      <div>
        {this.props.name}
        <br />
        {this.props.age}
      </div>
    );
  }
}

export default Persons;
