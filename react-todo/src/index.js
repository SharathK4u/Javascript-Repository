import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';import App from './App';
import store from './services/store';
import { Provider } from 'react-redux';
/*
const fetchTodo = {
        type : 'FETCH_TODO',
        payload : {todos : [{id:1,title:'Test'}]}
}

console.log(store.getState());

store.dispatch(fetchTodo);
*/

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));