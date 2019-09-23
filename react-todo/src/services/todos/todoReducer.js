
const initialState = {
    todos : []
}

const todoReducer = (state=initialState,action) => {
    switch(action.type){
        case 'FETCH_TODO':
            return {
                ...state,
                todos: action.payload
            };
        case 'ADD_TODO':
            //Creating a copy of todos and adding new entry
            let newTodos = state.todos.slice();
            newTodos.push(action.payload);
            //returning updated state.
            return {
                ...state,
                todos : newTodos
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((item,index)=>{
                    if(item.id===action.payload){
                        return false;
                    }
                    return true;
                })
            };
        case 'MARK_COMPLETE':
            /*
            let updateTodos= state.todos.slice();
            let updateTodo = updateTodos[action.payload-1];
            updateTodo.completed = !(updateTodo.completed);
            updateTodos[action.payload-1] = updateTodo;
            */
            
            return {
                ...state,
                todos: state.todos.map((item,index)=>{
                    if(item.id===action.payload){
                        return {
                            ...item,
                            completed:!(item.completed)
                        }
                    }
                    return item;
                })
            }

        default : return state;
    }
}

export default todoReducer;