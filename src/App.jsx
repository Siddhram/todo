import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//  function counter(){
//    setCount(count+100000000000000*234567890);
const [todos,settodos]=useState([{
title:"learn dsa",
discription:"study at morning",
completed:true
},{
title:"go to gym",
discription:"do not go at gym",
completed:false
}])
function addtodo() {
  
  settodos([...todos,{
    title:"go to home"
    ,
discription:"do not go at gym",
completed:false
  }]);

}
//  }
  return (
    <>
    <button onClick={addtodo}>add</button>
    {todos.map(function (todo) {
      return <Name title={todo.title} discription={todo.discription} completed={todo.completed}></Name>
    })}
     {/* <Name title={todos[0].title} discription={todos[0].discription} completed={todos[0].completed}></Name> */}
    </>
  )
 
}
function Name(props) {

  return <div>
    <h1>{props.title}</h1>
    <h3>{props.discription}</h3>
    <button>{JSON.stringify(props.completed)}</button>
  </div>
}
 
export default App
