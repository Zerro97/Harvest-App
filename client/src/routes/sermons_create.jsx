import React, { Component } from 'react';
import axios from 'axios';
import {port} from '../config';

export default class SermonsCreateRoute extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      description: '',
    }
  }

  onChangeTitle(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const sermon = {
      title: this.state.title,
      description: this.state.description,
    }

    axios.post(port + '/sermon', sermon)
      .then(res => console.log(res.data));

    this.setState({
      title: '',
      description: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Create Sermons</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Title: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeTitle}
                />
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.desciption}
                onChange={this.onChangeDescription}
                />
          </div>

          <div className="form-group">
            <label>Upload Video: </label>
            <input type="file" ref="fileUploader" className="" />
          </div>
          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}