import axios from 'axios';

export function retrieveTodo(data) {
    return{
    type : 'FETCH_TODO',
    payload : data
}
}

const fetchTodo = () => dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(res=>{
      return dispatch({
        type : 'FETCH_TODO',
        payload : res.data
        })
    })
    
}

const addTodo = (todo) => {
        return {
            type : 'ADD_TODO',
            payload : todo
        }
}

const deleteTodo = (id) => {
    return {
        type : 'DELETE_TODO',
        payload : id
    }
}

const markComplete = (id) => {
    return {
        type : 'MARK_COMPLETE',
        payload : id
    }
}

const clearTodo = (title) => {
    return {
        type : 'CLEAR_TODO',
        payload : title
    }
}

const updateTitle = (title) => {
    return {
        type : 'UPDATE_TITLE',
        payload : title
    }
}

export {fetchTodo,addTodo,deleteTodo,markComplete,clearTodo,updateTitle}