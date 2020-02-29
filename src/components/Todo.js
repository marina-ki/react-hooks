import React, { useContext, useState } from 'react'
import {DELETE_TODO} from '../actions'
import AppContext from '../contexts/AppContext'
const Todo = ({ todo }) => {
  const { dispatch } = useContext(AppContext)
  const id = todo.id
  const [ editting, setEditting ] = useState(false);
  const [title, setTitle] = useState(todo.title)
  const [body, setBody] = useState(todo.body)

  const handleClickEditButton = e => {
    e.preventDefault()
    setEditting(true)
  }
  const handleClickSaveButton = e => {
    e.preventDefault()
    setEditting(false)
  }
  const handleClickDeleteButton = e => {
    e.preventDefault()
    const result = window.confirm('本当に削除しても良いですか？')
    if (result) dispatch({ type: DELETE_TODO, id })
  }

  return (
    <div className="card todo-card">
      <div className="card-body" style={{whiteSpace: 'pre-line'}}>
      {editting?(
        <>
          <input className="card-title" value={title} onChange={e => setTitle(e.target.value)}></input>
          <textarea className="card-text" value={body} onChange={e => setBody(e.target.value)}></textarea>
          <button className="btn btn-warning btn-sm" onClick={handleClickSaveButton}>保存</button>
        </>
      ):(
        <>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <button className="btn btn-warning btn-sm" onClick={handleClickEditButton}>編集</button>
        </>
      )}

        <button className="btn btn-danger btn-sm" onClick={handleClickDeleteButton}>削除</button>
      </div>
    </div>
  )
}

export default Todo
