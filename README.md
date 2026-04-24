# Diwan Bhandari — Portfolio

Personal portfolio site built with React and Tailwind CSS. Live at [diwan01.github.io/portfolio](https://diwan01.github.io/portfolio/).

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — scroll and hover animations
- **React Icons** — icon set

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── context/
│   └── ThemeContext.jsx   # dark / light mode
├── App.jsx
├── main.jsx
└── index.css
```

## Local Development

```bash
npm install
npm run dev
```

## Deployment

Hosted on GitHub Pages via the `gh-pages` branch.

```bash
npm run deploy
```

This runs `vite build` and publishes `dist/` to the `gh-pages` branch automatically.
