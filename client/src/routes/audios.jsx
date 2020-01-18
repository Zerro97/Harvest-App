import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AudiosRoute extends Component {
  render() {
    return (
      <div>
        <h3>Audios</h3>
        <div>
            <h4>Title</h4>
            <div>Video</div>
            <p>Description</p>
            <Link to="/audios_create" className="btn btn-primary">Create</Link>
        </div>
      </div>
    )
  }
}