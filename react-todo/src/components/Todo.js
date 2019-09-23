import React, { Component } from 'react';

class Todo extends Component {
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
                <input type="checkbox" defaultChecked={this.props.todo.completed} onChange={this.props.markComplete.bind(this,id)}/>{'  '}
                {title}
                <button style={btnStyle} onClick={this.props.deleteTodo.bind(this,id)}>X</button>
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

export default Todo;