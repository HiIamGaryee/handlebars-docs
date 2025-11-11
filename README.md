# Handlebars Docs UI (React + TypeScript + Vite + MUI)

A minimal documentation UI scaffold inspired by the Handlebars site. Built with React, TypeScript, Vite, and Material UI (MUI).

## Prerequisites

- Node.js 18+ and npm

## Quick start

```bash
# 1) Install dependencies
npm install

# 2) Start the dev server (http://localhost:5173)
npm run dev
```

## Build for production

```bash
npm run build
```

The output is written to `dist/`.

## Preview the production build

```bash
npm run preview
```

## Available scripts

- `npm run dev`: Start Vite dev server
- `npm run build`: Type-check and build production bundle
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint

## Tech stack

- React 19 + TypeScript
- Vite 7
- Material UI v5 (`@mui/material`, `@mui/icons-material`)
- Emotion (`@emotion/react`, `@emotion/styled`)

## Project structure

```
src/
  main.tsx        # App bootstrap
  App.tsx         # Docs layout + content
  App.css         # Temporary styles (will migrate to MUI)
  index.css       # Global variables and resets
```

## Theme

MUI is installed and ready. Next steps will migrate styles to a central MUI theme for consistent colors/spacing/typography across pages.
