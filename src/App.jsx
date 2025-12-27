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
      </div>
        

    </>
  )
}

export default App  
