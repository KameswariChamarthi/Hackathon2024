import React, { useEffect, useState } from 'react'
import "./newsportal.css"

function NewsPortal(props) {
    const [newtask, setnewtask] = useState('')
    const [taskList, settaskList] = useState([])
    const handleInputchange = (event) => {
        setnewtask(event.target.value)
    }
    const handleNewtask = () => {
        if (newtask) {
            settaskList((prev) => [...prev, newtask])
            props.setTaskList((prev) => [...prev, newtask])
            setnewtask('')
        }
    }
    useEffect(() => {
        console.log(taskList)
    }, [taskList])
    return (
        <>
            <div className='inputDiv'>
                <br/>
                <input name="postTitle" placeholder="Heading to Your Article!" />
                <textarea id="userInput" rows="10" cols="80" placeholder='Enter the Article'></textarea>
                <button onClick={handleNewtask}>Submit</button>
            </div>
        </>
    )
}
export default NewsPortal
