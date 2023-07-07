import React, { useState } from 'react'

export  const AddTodos = ({addTodos}) => {
    const[title,setTitle]= useState('')
    const[desc,setDesc]= useState('')
    // const[sno,setSno]= useState('')
    const submit= (e)=>{

e.preventDefault()
if(!title || !desc){
    alert("Title Or Description can not be blank")
}else{

    addTodos(title, desc )
    
    setTitle("")
    setDesc("")
    // setSno("")
}
    }
  return (
    <div className='container my-3'>
        <h3>Add To Todo List</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc"  className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}


