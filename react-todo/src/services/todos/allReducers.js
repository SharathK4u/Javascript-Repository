import {combineReducers} from 'redux'
import addTodoReducer from './addTodoReducer'
import todoReducer from './todoReducer'

const allReducers = combineReducers({
    addTodoReducer : addTodoReducer,
    todoReducer : todoReducer
});

export default allReducers;