import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     name: '',
     img: '',
    };
  }

  componentDidMount() {
    this.callAPI();
    console.log('name:', this.state.name)
  }

  callAPI = () => {
    axios
    .get(`https://api.github.com/users/maddiestrange`)
      .then(data => {
        console.log(data)
        this.setState({
            name: data.data.name,
            img: data.data.avatar_url
            })})
        .catch(err => {
            console.log(err);
        });
  };

  render() {
    return (
      <div>
        <h1>My github</h1>
        <h2>{this.state.name}</h2>
        <img width="200" src={this.state.img} alt="avatar img" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

