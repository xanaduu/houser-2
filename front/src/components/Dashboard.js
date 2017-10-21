import React, {Component} from 'react';
import Navigation from './Navigation.js'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataz: ""
    }
  }

  render() {
    return(
      <div>
        <Navigation />
        <h1>This is a Dashboard cat</h1>
        <p>Here is a paragraph</p>
        <ul>
          <li>These are items</li>
          <li>These are items</li>
          <li>These are items</li>
        </ul>
      </div>
    )
  }
}

export default Dashboard