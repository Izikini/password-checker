# 🔐 Password Strength Checker

**Author:** Bohdan Bura  
**Version:** 1.0

---

## 📝 Description

A web application for checking password strength. Users can enter passwords and get an evaluation based on length, character variety, presence of numbers, detection of repeating characters, common patterns (e.g. "qwerty", dates in DD.MM.YYYY format), and usernames.

Passwords can be saved to a database along with the date, username, and strength score.

---

## ✨ Features

- Real-time password strength evaluation
- Detection of weak patterns, repetitions, and personal information
- Saving password checks to the database
- View history of previously checked passwords
- Suggestions for improving password strength

---

## 🚀 How to Use

### 1. Check Password Strength
- Enter your username in the "Username" field
- Enter your password in the "Password" field
- Click **"Check Password"**
- You will receive a score from 0 to 4 points along with improvement suggestions

### 2. View History
- Go to the history section
- Enter your username
- Click **"Get History"** to see all previously checked passwords with dates and scores

---

## 💡 Tips for Creating Strong Passwords

1. **Length** — Use at least 12–16 characters. Longer is better.
2. **Variety** — Include uppercase and lowercase letters, numbers, and special characters.
3. **No repetitions** — Avoid sequences like "aaa" or "1111".
4. **Avoid common patterns** — Do not use "qwerty", "123456", "password", etc.
5. **Avoid dates** — Do not include dates in DD.MM.YYYY format.
6. **Avoid personal info** — Never use your name, surname, or birthdate.
7. **Use a password manager** — Consider tools like Bitwarden or 1Password.
8. **Change passwords regularly** — Especially for important accounts.

---

## 🛠 Installation and Running

```bash
git clone https://github.com/Izikini/password-checker.git
cd password-checker
npm install
npm run server
npm run dev
```
## 🧰 Technologies

Frontend: React
Backend: Node.js + Express
Database: SQLite
