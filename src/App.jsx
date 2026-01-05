import { useState } from 'react'
import './App.css'

// Main App component for password checking
function App() {
  // State variables for form inputs and results
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to server to check password
      const response = await fetch('http://localhost:3001/check-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Update state with score and feedback
        setScore(data.score);
        setFeedback(data.feedback.suggestions.join(' ') || 'Good password!');
      } else {
        setFeedback(data.error);
      }
    } catch {
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
          <div className="password-input-container">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder='Pisz tu ' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button 
              type="button" 
              className="toggle-password" 
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <button type="submit">Sprawdź hasło</button>
        </form>
        {score !== null && (
          <div className="result-container">
            <h3>Wynik: <span className={`score score-${score}`}>{score}/4</span></h3>
            <p className="feedback">{feedback}</p>
          </div>
        )}
      </div>
        

    </>
  )
}

export default App  
