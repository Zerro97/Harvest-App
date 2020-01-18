import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SermonsRoute extends Component {
  render() {
    return (
      <div>
        <h3>Sermons</h3>
        <div>
            <h4>Title</h4>
            <div>Video</div>
            <p>Description</p>
            <Link to="/sermons_create" className="btn btn-primary">Create</Link>
        </div>
      </div>
    )
  }
}