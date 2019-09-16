import React,{ Component } from 'react';

class AddTodo extends Component{
    state = {
        title:''
    }

    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        console.log('Inside submit');
        this.setState({title:''})
        console.log(this.state);
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input type="text" name="title" 
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
export default AddTodo;