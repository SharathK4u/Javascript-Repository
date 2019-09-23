import React,{ Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { retrieveTodo,markComplete,deleteTodo} from './services/todos/actions'

class App extends Component{
  
  state = {
    todos: []
  }

  retrieveTodo = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(res=>{
      this.props.retrieveTodo(res.data);
    })
    
  }
    
  markComplete = (id)=>{
    /*
    this.setState({todos : this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    })})
    */
    this.props.markComplete(id);
  }

  deleteTodo=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>{
      this.props.deleteTodo(id);
    })  
  }


  
  componentDidMount(){
    /*
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(res=>{
      this.setState({todos:res.data})
    })
    */

    this.retrieveTodo();

  }

  render(){
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" render={props=>(
          <React.Fragment>
          <AddTodo/>
          <Todos todos={this.props.todos}/>
          </React.Fragment>
        )}/>
        <Route path="/about" component={About}/>
        
      </div>
      </Router>
    );
  }
}

//Mapping State to Props
//We should refer the props and never refer state directly.
const mapStateToProps = state => ({
  todos : state.todoReducer.todos
});

//Mapping Actions to Props.
const mapActionsToProps = {
  retrieveTodo,
  markComplete,
  deleteTodo
};

//Binding redux with react
export default connect(mapStateToProps,mapActionsToProps)(App);