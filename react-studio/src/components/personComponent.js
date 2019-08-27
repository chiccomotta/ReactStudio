import React, { Fragment } from 'react'

const TrComp = ({ todos }) => {
  return (
    <Fragment>
      {todos.map((todo, i) => (
        <tr key={i}>
          <td>{todo.name}</td>
          <td>{todo.age}</td>
          <td>{todo.grade}</td>
          <td>{todo.birthday}</td>
        </tr>
      ))}
    </Fragment>
  )
}

export { TrComp }
