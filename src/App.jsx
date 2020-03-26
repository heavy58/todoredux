import React from 'react'
import { connect } from 'react-redux'
import Haythem from './Haythem'

const App = (props) => {
  console.log("input:",props.input)
  return (<div>
    <div>
      <input type="text" placeholder="input" onChange={(e)=>props.setInput(e.target.value)}/>
      <button onClick={()=>props.Add(props.input)}>ADD </button>
    </div>
    <Haythem/>
  </div>);
}

const mapDispatchToProps=(dispatch)=> {
  return {
      setInput : (input)=>dispatch({type:"SET_INPUT",payload:input}) , 
      Add :(input)=>dispatch({type:"ADD",payload:{value:input, id:Math.random(), Complete:false }})
  }
}

const mapStateToProps=(state)=> {
  return {
    input : state.input ,  
    Todo : state.Todo
  }
}






export default connect(mapStateToProps, mapDispatchToProps)(App);