import React, { useEffect, useState } from 'react'
import "./newsportal.css"

function NewsPortal({setTaskList}) {
    const [heading, setHeading] = useState('')
    const [article, setArticle] = useState([])
    
    const handleNewtask = () => {
        setTaskList((pre)=> [...pre, {heading: heading, article: article}])
    }

    return (
        <>
            <div className='inputDiv'>
                <br/>
                <input name="postTitle" onChange={(e)=> setHeading(e.target.value)}  placeholder="Heading to Your Article!" />
                <input type='date'/>
                <textarea id="userInput" onChange={(e)=> setArticle(e.target.value)} rows="10" cols="80" placeholder='Enter the Article'></textarea>
                <button onClick={handleNewtask}>Submit</button>
            </div>
        </>
    )
}
export default NewsPortal
