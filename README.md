# Sprawdź Swoje Hasło (Password Checker App)

Autor: Bohdan Bura  
Wersja: 1.0

## Opis

Aplikacja webowa do sprawdzania siły haseł. Użytkownicy mogą wprowadzać hasła i oceniać ich siłę na podstawie długości, różnorodności znaków, obecności cyfr oraz wykrywania powtarzających się znaków, prostych wzorców (np. "qwerty", daty w formacie DD.MM.YYYY) i nazw użytkowników. Hasła mogą być zapisywane w bazie danych z datą, nazwą użytkownika i wynikiem.

## Funkcje

- Wprowadzanie hasła przez użytkownika.
- Ocena siły hasła na podstawie długości, różnorodności znaków, cyfr, wykrywania powtórzeń i wzorców.
- Zapisywanie haseł w bazie danych z datą, nazwą użytkownika i wynikiem.
- Wyświetlanie wyników w czasie rzeczywistym.
- Historia zapisanych haseł.

## Wskazówki dotyczące tworzenia silniejszych haseł

Aby stworzyć silne hasło, postępuj zgodnie z następującymi wskazówkami:

1. **Długość**: Hasło powinno mieć co najmniej 12 znaków. Im dłuższe, tym lepiej.
2. **Różnorodność znaków**: Używaj kombinacji małych i wielkich liter, cyfr oraz znaków specjalnych (np. !@#$%).
3. **Unikaj powtórzeń**: Nie używaj powtarzających się znaków, takich jak "aaa" lub "111".
4. **Unikaj powszechnych wzorców**: Nie używaj sekwencji jak "qwerty", "123456" czy "password".
5. **Unikaj dat**: Nie używaj dat w formacie DD.MM.YYYY w haśle.
6. **Unikaj osobistych informacji**: Nie włączaj swojego imienia, nazwiska lub innych osobistych danych do hasła.
7. **Używaj menedżera haseł**: Rozważ użycie dedykowanego narzędzia do zarządzania hasłami, aby generować i przechowywać unikalne hasła dla różnych kont.
8. **Regularnie zmieniaj hasła**: Zmieniaj hasła co kilka miesięcy, zwłaszcza dla ważnych kont.

## Instalacja i uruchomienie

1. Sklonuj repozytorium: `git clone https://github.com/Izikini/password-checker.git`
2. Zainstaluj zależności: `npm install`
3. Uruchom serwer: `npm run server`
4. Uruchom aplikację frontend: `npm run dev`

Aplikacja będzie dostępna pod adresem `http://localhost:5173`, a serwer pod `http://localhost:3001`.

## Technologie

- Frontend: React
- Backend: Node.js + Express
- Baza danych: SQLite
    

