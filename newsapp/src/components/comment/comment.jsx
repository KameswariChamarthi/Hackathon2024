import React, { useEffect, useState } from 'react'
import "./comment.css"

function Comment({task}) {

  return (
    <>
    <div className='inputDiv'>  
    <h2>{task.heading}</h2>
    <p>{task.article}</p>
    </div>  
    </>
  )
}
export default Comment
