# Context API

A simple React + Vite authentication UI project with protected routes, built using Tailwind CSS and shadcn-style UI components.

## Live Demo

- Live Site: [https://learn-context-api.netlify.app/](https://learn-context-api.netlify.app/)
- Repository: [https://github.com/Gandharvkalia1/context-api](https://github.com/Gandharvkalia1/context-api)

## Features

- Login screen
- Verify account screen with 4-digit code input
- Change password screen
- Protected route handling
- Demo authentication flow using `localStorage`
- Reusable shadcn-style UI components

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS

## Project Structure

```text
src/
  components/
    ui/
    ProtectedRoute.jsx
  lib/
    utils.js
  pages/
    Login.jsx
    Verify.jsx
    ChangePassword.jsx
    Dashboard.jsx
    Profile.jsx
  App.jsx
  App.css
  main.jsx
```

## Routes

- `/` - Login page
- `/verify` - Verification page
- `/change-password` - Change password page
- `/dashboard` - Protected dashboard page
- `/profile` - Protected profile page

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Gandharvkalia1/context-api.git
cd context-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

## Demo Authentication Flow

- Enter any email and password on the login page
- You will be redirected to the verification screen
- Enter any 4-digit code
- After verification, protected routes become accessible

## Notes

- This project currently uses a demo auth flow with `localStorage`
- It is designed for learning and UI practice
- You can extend it by connecting a real backend authentication API

## Author

- GitHub: [Gandharvkalia1](https://github.com/Gandharvkalia1)
