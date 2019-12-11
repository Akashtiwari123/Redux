import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {

  addPerson = () => {
    
  };

  render() {
    return (
      <div>
        <center>
          <button onClick={this.addPerson}>Identification Number</button>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newID: state.id
  };
};

export default connect(mapStateToProps)(App);
