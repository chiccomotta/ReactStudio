import React, { Fragment } from 'react'

import logo from './logo.svg'
import { HelloWorld, oggi } from './components/HelloWorld'
import { TrComp, people } from './components/personComponent'
import './App.css'

const dati = {
  todos: [1, 2, 3, 4, 5, 6],
  name: 'Chiccone'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '50%' }}>
          <table className="table table-sm table-hover bg-warning">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <TrComp todos={people} />
            </tbody>
          </table>
        </div>
        <HelloWorld todos={[1, 2, 3, 4, 5, 6]} name="Chicco" />
      </header>
    </div>
  )
}

export default App
