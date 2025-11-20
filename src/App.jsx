import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Password Checker</h1>
      <h2>Podaj imie użytkownika</h2>
      <div id="appka">
          <input type="text" placeholder='Twoje imie to'/>

        <h2>Podaj Hasło</h2>
        <input type="text" placeholder='Pisz tu '/>
        <div id="user-data">
            <h2>Twoje rekordy</h2>
            <table>
              <tr>
                <th>Imie</th>
                <th>Data</th>
                <th>Hasło testowae</th>
                <th>Ilośc Punktów </th>
              </tr>
              <tr>
                <td>Przyklad imie</td>
                <td>Przyklad data</td>
                <td>Przyklad haslo</td>
                <td>Przyklad punkty </td>
              </tr>
           </table>
        </div>
        
      </div>
        

    </>
  )
}

export default App  
