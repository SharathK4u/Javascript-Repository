const initialState = {
    title : ''
}

const addTodoReducer = (state=initialState,action)=>{
    switch (action.type){
        case 'CLEAR_TODO' : {
            return {...state,title:''};
        }
        case 'UPDATE_TITLE' : {
            return {...state,title:action.payload}
        }
        default : return state;
    }
}

export default addTodoReducer;