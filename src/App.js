import React, { useState } from 'react'
import './App.css'
export default function App() {
  const[inputList,setInputList]= useState("");
  const itemEvent = (event)=> {
    setInputList(event.target.value);
  }
  return (
    <>
      <div className='main_div'>
       <div className='centre_div'>
        <h1 className='to-do'>ToDo List</h1>
        <input type="text" placeholder='Enter name of items' className='items' onChange={itemEvent}/>
        <button className='button'>+</button>
        <ol>
          <li>{inputList}</li>
        </ol>
       </div>
      </div>
    </>
  )
}
