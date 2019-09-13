import React, { Component } from 'react';
import Todo from './Todo'

class Todos extends Component {
    render(){
        console.log(this.props.todos);
        return this.props.todos.map((todo)=>(
            <Todo todo={todo}/>
        ));
    }
}

export default Todos;