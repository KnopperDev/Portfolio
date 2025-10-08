# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Portfolio (Vite + React)

A minimal one-page developer portfolio scaffold built with Vite and React.

Getting started
---------------

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Open http://localhost:5173 (or the port Vite reports).

Where to edit
-------------

- Main content: `src/data/portfolio.js` (bio, skills, experience, projects, contact).
- Components: `src/components/*` (Header, Hero, About, Experience, Projects, Contact, Footer).
- Styles: `src/portfolio.css`.

Notes
-----

This is intentionally simple and easy to customize. Feel free to replace placeholder text, add images in `src/assets`, or wire real project links in `src/data/portfolio.js`.
