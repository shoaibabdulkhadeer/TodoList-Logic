import React, { useState } from 'react'

const Home = () => {
 
  const [todo,setTodo] = useState([]);
  const [value,setValue] = useState("")
   
 const inp = (e) => {
      setValue(e.target.value)
 }

 const add = () => {
  if(value === ""){
    alert("Please enter a value")
  }else{
    setTodo([...todo,value])
   setValue("")
  }
  
 }

 const del = (id) => {
      setTodo((olditems) => {
        return olditems.filter((array,index)=> {
          return index !== id
        })
      })
        
        
 }
    
  return (
    <div>
  
          <input  onChange={inp}  value={value}  type="text" placeholder='whats happening' required/>
          <button onClick={add}>Add Todo</button>
        
        {todo.map((x,index) => {
      return (
        <div style={{display:"flex",alignItems:"center" }} >
        
        <h1 style={{marginLeft:"8px"}} >{x}</h1>
        <button onClick={() => del(index)}>delete</button>
        </div>
      )
        })}  
        

        
    </div>
  )
}

export default Home