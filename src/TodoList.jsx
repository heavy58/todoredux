import React from 'react'
import { connect } from 'react-redux'


const ToDoList = (props) => {
    console.log(props.Todo)
    return (<div>
       {props.Todo.map((el,i)=> 
           <div key={i}>
                <span style ={{textDecoration : el.Complete&& "line-through"}}>{el.value}</span>
                <button onClick={()=>props.Remove(el.id)}>DELETE</button>
                <button onClick ={()=>props.Change(el.id)}>{!el.Complete? "Complete":"UNDO"}</button>
                {console.log(el.Complete)}
           </div>
       )}
    </div>  );
}



const mapStateToProps=(state)=> {
    return {
      Todo : state.Todo
    }
  }

  const mapDispatchToProps=(dispatch)=> {
      return {
          Remove :(id)=>dispatch({type:"REMOVE",payload:id }), 
          Change : (id)=>dispatch ({type:"CHANGE",payload : id})
      }
  }
  
 
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);