import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import zxcvbn from 'zxcvbn';

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

// API to check password
app.post('/check-password', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  const result = zxcvbn(password);
  const score = result.score; // 0-4

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