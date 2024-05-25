import React, { useEffect, useState } from 'react'
import "./comment.css"

function Comment(props) {
    const [newtask, setnewtask] = useState('')
    const [taskList, settaskList] = useState([])
    const handleInputchange =(event) =>{
        setnewtask(event.target.value)
    }
    const handleNewtask = () => {
      if(newtask){      
        settaskList((prev) => [...prev, newtask])
        props.setTaskList((prev) => [...prev, newtask])
        setnewtask('')
      }
    }
    useEffect(()=>{
        console.log(taskList)
    },[taskList])
  return (
    <>
    <div className='inputDiv'>  
    <textarea id="userInput" rows="1" cols="8" placeholder='Enter the Article'></textarea>
    <button onClick={handleNewtask}>COMMENT!</button>
    </div>  
    </>
  )
}
export default Comment
