import React, { Fragment } from 'react'

const people = [
  {
    name: 'Ciccio',
    age: 18,
    grade: 1,
    birthday: '10/10/2001'
  },
  {
    name: 'Carlo',
    age: 36,
    grade: 1,
    birthday: '10/10/1989'
  },
  {
    name: 'Giovanna',
    age: 18,
    grade: 1,
    birthday: '19/04/1990'
  }
]

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

export { TrComp, people }
