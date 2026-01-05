import { useState } from 'react'
import './App.css'

// Component for displaying password check history
function Password_history() {
  // State for username input and history data
  const [username, setUsername] = useState('');
  const [history, setHistory] = useState([]);

  // Function to fetch history from server
  const fetchHistory = async () => {
    if (!username) return;
    try {
      const response = await fetch(`http://localhost:3001/history/${username}`);
      const data = await response.json();
      if (response.ok) {
        setHistory(data);
      } else {
        alert(data.error);
      }
    } catch {
      alert('Error fetching history');
    }
  };

  return (
    <>
         <div id="user-data">
            <h2>Twoje rekordy</h2>
            <input 
              type="text" 
              placeholder="Podaj imię użytkownika" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <button onClick={fetchHistory}>Pobierz historię</button>
            <table>
              <thead>
                <tr>
                  <th>Imie</th>
                  <th>Data</th>
                  <th>Hasło testowae</th>
                  <th>Ilośc Punktów </th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{new Date(item.date).toLocaleString()}</td>
                    <td>{item.password}</td>
                    <td>{item.score}</td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>
    </>
  )
}

export default Password_history
