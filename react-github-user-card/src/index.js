import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import FollowerCards from './components/FollowerCards';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     name: '',
     img: '',
     login: '',
     followers: []
    };
  }

  componentDidMount() {
    this.callAPI();
    console.log('name:', this.state.name)
    console.log('followers:', this.state.followers)
  }

  callAPI = () => {
    axios
    .get(`https://api.github.com/users/maddiestrange`)
      .then(data => {
        this.setState({
            name: data.data.name,
            img: data.data.avatar_url,
            login: data.data.login
            })})
        .catch(err => {
            console.log(err);
        });

    axios
    .get(`https://api.github.com/users/maddiestrange/followers`)
    .then(data => {
      this.setState({
          followers: data.data
          })})
      .catch(err => {
          console.log(err);
      });
  };

  render() {
    return (
      <div>
        <UserCard name={this.state.name}
                  login={this.state.login}
                  img={this.state.img}/>
        <FollowerCards data={this.state.followers}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

