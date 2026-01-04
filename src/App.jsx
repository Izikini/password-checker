import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3003/check-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setScore(data.score);
        setFeedback(data.feedback.suggestions.join(' ') || 'Good password!');
      } else {
        setFeedback(data.error);
      }
    } catch (error) {
      setFeedback('Error checking password');
    }
  };

  return (
    <>
      <h1>Sprawdź Swoje Hasło</h1>

      <div id="appka">
        <form onSubmit={handleSubmit}>
          <h2>Podaj imie użytkownika</h2>
          <input 
            type="text" 
            placeholder='Twoje imie to' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <h2>Podaj Hasło</h2>
          <input 
            type="password" 
            placeholder='Pisz tu ' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Sprawdź hasło</button>
        </form>
        {score !== null && (
          <div>
            <h3>Wynik: {score}/4</h3>
            <p>{feedback}</p>
          </div>
        )}
      </div>
        

    </>
  )
}

export default App  
