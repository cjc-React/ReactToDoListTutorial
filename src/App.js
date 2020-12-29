import React, { Component } from 'react';
import './App.css';
import ToDos from "./components/ToDos";



class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        complete: false
      },
      {
        id: 2,
        title: 'Dinner with Wife',
        complete: true
      },
      {
        id: 3,
        title: 'Meeting with Boss',
        complete: false
      }  
    ]
  }

  render() {
    return(
      <div className="App">
        <ToDos todos={this.state.todos}/>
      </div>
    );
    
  }
  
}

export default App;
