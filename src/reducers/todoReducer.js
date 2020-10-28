import {FETCH_ALL,TOGGLE_COMPLETE,HIDE_COMPLETE,TOGGLE_COMPLETE_ALL,SET_ADD_TODO_TEXT, FILTER_TODOS} from '../actions/types';

const initialState = {
    todos: [],
    hideComplete: false,
    completeAll: false,
    addTodoText:"",
    originalTodos:[]
}

export default (state = initialState, {type,payload}) => {
    switch(type){
        case FETCH_ALL:
            return {...state,todos: [...payload],originalTodos:[...payload]};
            break;
        case TOGGLE_COMPLETE:
            return {...state,todos: state.todos.map((todo)=> {
                if(todo._id === payload){
                    return { ...todo, completed: !todo.completed };
                }else{
                    return{...todo};
                }
            })}
            break;
        case HIDE_COMPLETE:
            return{...state,hideComplete: !state.hideComplete};
            break;
        case TOGGLE_COMPLETE_ALL:
            return{...state,completeAll: !state.completeAll};
            break;
        case SET_ADD_TODO_TEXT:
            return {...state,addTodoText: payload};
            break;
        case FILTER_TODOS:
            let todos = null;
            if(payload){
                todos = state.originalTodos.filter((todo)=>todo.title.startsWith(payload));
            }else{
                todos = [...state.originalTodos];
            }
            return {...state,todos}
            break;
        default:
            return state;
    }
};