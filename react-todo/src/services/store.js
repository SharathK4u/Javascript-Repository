import { createStore } from 'redux'
import allReducers from './todos/allReducers'

const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>console.log(store.getState()));

export default store;