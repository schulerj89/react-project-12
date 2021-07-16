import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch('/api/home')
    .then(res => res.json())
    .then(data => this.setState({data}, () => console.log('Data fetched', data)));
  }

  render() {
    return (
      <div className="Home">
        <h3>This is the home page</h3>
        <ul>
          {this.state.data.map(data => 
            <li>{data.name}</li>  
          )}
        </ul>
      </div>
    );
  }
}

export default Home;
