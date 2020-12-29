import React, { Component } from 'react';
import Header from "./components/layout/Header";
import './App.css';
import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";
import { findAllByDisplayValue } from '@testing-library/react';



class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with Wife',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with Boss',
        completed: false
      }  
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  
  addToDo = (title) => {
    const newToDo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newToDo] });
  }

  render() {
    return(
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo} />
          <ToDos todos={this.state.todos} 
          markComplete={this.markComplete}
          delTodo={this.delTodo} />
        </div>   
      </div>
    );
    
  }
  
}

export default App;
