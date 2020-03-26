import { createStore, combineReducers } from "redux";
import InputReducer from "./Reducers/InputReducer";
import ToDoListReducer from "./Reducers/ToDoListReducer";

const Store = createStore (combineReducers({
     input : InputReducer , 
     Todo : ToDoListReducer ,
    
}))


export default Store