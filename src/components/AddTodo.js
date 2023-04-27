import React from 'react'
import '../css/addTodo.css'

function AddTodo() {
  return (
    <>
        <div className='button-position-relative'>
            <div className='button-position-absolute'>
            <button className='btn btn-success add-button'>+</button>
            </div>
        </div>
    </>
  )
}

export default AddTodo
