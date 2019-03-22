import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        {
          name: 'mohan',
          hobbies: ['football', 'react']
        }, {
          name: 'bhargav',
          hobbies: ['cricket', 'd3']
        }, {
          name: 'sai',
          hobbies: ['batting', 'CS']
        }, {
          name: 'manoj',
          hobbies: ['music', 'angular']
        }
      ]
    };
    
    setTimeout(() => {
      const randFrnd = Math.floor(
        Math.random() *
        this.state.friends.length
      );
      
      const hobbyIndex = Math.floor(
        Math.random() *
        this.state.friends[randFrnd].length
      );
      const friends = this.state.friends.map((frnd, i) => {
        if(i === randFrnd) {
        const hobbies = [...frnd.hobbies];
        hobbies.splice(hobbyIndex, 1);
        return {
          ...frnd,
          hobbies
        };
      }
        return frnd;
      });
      this.setState({friends});
    }, 5000);
  }
  
  render() {
    const friends = this.state.friends.map((friend, index) => (
      <li key={index}>
        <h3>{friend.name}</h3>
        <h4>Hobbies: {friend.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {friends}
        </ul>
      </div>
    );
  }
}

export default App;
