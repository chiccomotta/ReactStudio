import React from 'react'
import ReactDOM from 'react-dom'

const style = { height: '250px' }

export const HelloWorld = ({ todos, name }) => {
  return (
    <div style={style}>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      {name}
    </div>
  )
}

export const oggi = new Date().toLocaleDateString()
