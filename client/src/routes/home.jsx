import React, { Component } from 'react';

export default class HomeRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <img src={require("../images/latestSermons.png")} className="img-fluid" alt="Responsive image"></img>
      </div>
    )
  }
}