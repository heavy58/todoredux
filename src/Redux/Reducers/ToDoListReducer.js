const ToDoListReducer=(state=[],action)=> {
   if(action.type==="ADD") {
      return [...state,action.payload]
   }else if(action.type==="REMOVE") {
     return state.filter(el=>el.id !==action.payload)
   } else if(action.type ==='CHANGE') {
       return state.map(el=> el.id ===action.payload ? {...el ,Complete:!el.Complete}: el)
   }
   else return state
}

export default ToDoListReducer