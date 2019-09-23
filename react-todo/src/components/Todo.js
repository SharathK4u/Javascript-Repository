import React, { Component } from 'react';
import {connect} from 'react-redux'
import {markComplete,deleteTodo} from '../services/todos/actions'
import axios from 'axios';

class Todo extends Component {

    markComplete = (id)=>{
        this.props.markComplete(id);
      }
    
    deleteTodo=(id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=>{
          this.props.deleteTodo(id);
        })  
      }

    getTodoStyle = () => {
        return {
            backgroundColor:'#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ? 'line-through':'none'
        }
    }

    render(){
        const {id,title} = this.props.todo;
        return( 
            <div style={this.getTodoStyle()}>
            <p>
                <input type="checkbox" defaultChecked={this.props.todo.completed} onChange={this.markComplete.bind(this,id)}/>{'  '}
                {title}
                <button style={btnStyle} onClick={this.deleteTodo.bind(this,id)}>X</button>
                </p>
            </div>
            );
    }
}

const btnStyle = {
    background : '#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 10px',
    borderRadius: '50%',
    cursor:'pointer',
    float:'right'
}

const mapActionsToProps = {
    markComplete,
    deleteTodo
}

export default connect(null,mapActionsToProps)(Todo);