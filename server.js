import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('./passwords.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS password_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  password TEXT,
  score INTEGER,
  date TEXT
)`);

// Custom password strength checker
function checkPasswordStrength(password, username) {
  let score = 0;
  let suggestions = [];

  // Length check
  if (password.length >= 12) {
    score += 3;
  } else if (password.length >= 8) {
    score += 2;
  } else if (password.length >= 6) {
    score += 1;
  } else {
    suggestions.push('Hasło powinno mieć co najmniej 6 znaków.');
  }

  // Character variety
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[^a-zA-Z\d]/.test(password);

  if (hasLower) score += 1;
  else suggestions.push('Dodaj małe litery.');

  if (hasUpper) score += 1;
  else suggestions.push('Dodaj wielkie litery.');

  if (hasDigit) score += 1;
  else suggestions.push('Dodaj cyfry.');

  if (hasSpecial) score += 1;
  else suggestions.push('Dodaj znaki specjalne.');

  // Repeating characters
  if (/(.)\1{2,}/.test(password)) {
    score -= 1;
    suggestions.push('Unikaj powtarzających się znaków.');
  }

  // Common patterns
  const commonPatterns = ['qwerty', '123456', 'password', 'abc123'];
  for (let pattern of commonPatterns) {
    if (password.toLowerCase().includes(pattern)) {
      score -= 1;
      suggestions.push('Unikaj powszechnych wzorców jak "qwerty" lub "123456".');
      break;
    }
  }

  // Date pattern DD.MM.YYYY
  if (/\d{2}\.\d{2}\.\d{4}/.test(password)) {
    score -= 1;
    suggestions.push('Unikaj dat w formacie DD.MM.YYYY.');
  }

  // Username in password
  if (username && password.toLowerCase().includes(username.toLowerCase())) {
    score -= 2;
    suggestions.push('Nie używaj swojego imienia w haśle.');
  }

  score = Math.max(0, Math.min(4, score));

  return { score, feedback: { suggestions } };
}

// API to check password
app.post('/check-password', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  const result = checkPasswordStrength(password, username);
  const score = result.score;

  const date = new Date().toISOString();

  // Save to DB
  db.run(`INSERT INTO password_history (username, password, score, date) VALUES (?, ?, ?, ?)`,
    [username, password, score, date], function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ score, feedback: result.feedback });
    });
});

// API to get history
app.get('/history/:username', (req, res) => {
  const { username } = req.params;
  db.all(`SELECT username, date, password, score FROM password_history WHERE username = ? ORDER BY date DESC`,
    [username], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});