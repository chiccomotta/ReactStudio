import React from 'react'
import logo from './logo.svg'
import { HelloWorld, oggi } from './components/HelloWorld'
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
          <table class="table table-sm table-hover bg-warning">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <HelloWorld todos={[1, 2, 3, 4, 5, 6]} name="Chicco" />
      </header>
    </div>
  )
}

export default App
