import { useState } from 'react'
import './App.css'

function Password_history() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
  )
}

export default Password_history
