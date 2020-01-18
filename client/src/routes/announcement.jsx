import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AnnouncementRoute extends Component {
  render() {
    return (
      <div>
        <h3>Announcements</h3>
        <div>
            <h4>Title</h4>
            <div>Video</div>
            <p>Description</p>
            <Link to="/announcement_create" className="btn btn-primary">Create</Link>
        </div>
      </div>
    )
  }
}