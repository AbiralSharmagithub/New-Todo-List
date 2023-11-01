import React from 'react'

const TodoLists=(props)=>{
    return( 
   <>
     <div className='myOrdered'>
       <li className='myEx'onClick={()=>{
        props.onSelect(props.id);
       }}>x</li>
       <li>{props.text}</li>
     </div>
    </>
    );
}
export default TodoLists;