import React,{ Component } from 'react';
import './App.css';
import Todos from './Todos';

class App extends Component{
  state = {
    todos: [
      {
        id:1,
        title:'Todo Title 1',
        completed:false
      },
      {
        id:2,
        title:'Todo Title 2',
        completed:false
      },
      {
        id:3,
        title:'Todo Title 3',
        completed:false
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
