import React, { useState } from 'react'
import './App.css'
import TodoLists from './TodoList';
export default function App() {
  const[inputList,setInputList]= useState("");
  const[Items,setItems]= useState([]);
  const itemEvent = (event)=> {
    setInputList(event.target.value);
  }
   const listOfItems=()=>{
    if(inputList==="")
     alert("PLease enter any item");
    else{
      setItems((oldItems)=>{
       return [...oldItems,inputList];
      }
      );
    setInputList("");}
   };
   const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index) => {
      return index !== id ;
      })
    })
    }
  return (
    <>
      <div className='main_div'>
       <div className='centre_div'>
        <h1 className='to-do'>ToDo List</h1>
        <input type="text" placeholder='Enter name of items' className='items' value={inputList} onChange={itemEvent}/>
        <button className='button' onClick={listOfItems}>+</button>
        <ol>
          {
            Items.map((itemValue,index)=>{
             return <TodoLists text= {itemValue}
             key={index} 
             id={index}
             onSelect={deleteItems}
             />
            })
          }
        </ol>
       </div>
      </div>
    </>
  )
}
