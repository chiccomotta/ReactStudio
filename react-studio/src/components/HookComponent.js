import React, { useEffect, useState } from 'react'

export const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Cristiano')

  useEffect(() => {
    console.log(`Hi ${name} you clicked ${count} times`)
  })

  return (
    <div>
      <p>
        Hi {name} you clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName(name === 'Cristiano' ? 'Roger' : 'Cristiano')}>
        Change name
      </button>
    </div>
  )
}
