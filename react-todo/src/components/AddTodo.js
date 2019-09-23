import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {addTodo,clearTodo,updateTitle} from '../services/todos/actions'
import axios from 'axios';

class AddTodo extends Component{
    
    //For updating the title field on entering the value.
    onChange = (e) =>{
        this.props.updateTitle(e.target.value);
    }

    //Calling the add method
    onSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/todos",{title:this.props.title,completed:false})
        .then(res=>{
            this.props.addTodo(res.data);
            this.props.clearTodo();
        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input type="text" name="title" value={this.props.title}
                placeholder="Add Todo ..."
                style={{flex:'10',padding:'5px'}}
                onChange={this.onChange}/>
                <input type="submit" value="Submit"
                style={btnStyle}/>
            </form>
        )
    }
}

const btnStyle = {
    background : '#333',
    color : '#fff',
    textAlign : 'center',
    padding : '10px'

}

const mapStateToProps = state =>({ 
    title : state.addTodoReducer.title
})

const mapActionsToProps = {
  addTodo,
  clearTodo,
  updateTitle
}

export default connect(mapStateToProps,mapActionsToProps)(AddTodo);