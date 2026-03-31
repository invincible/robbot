# Rob Bot Landing Page

## Project Overview
A static landing page for "Rob Bot" (Роб Бот), an AI-driven sales agent product targeting B2B companies. The page showcases features like 24/7 lead handling, CRM integration, and Human-in-the-Loop (HITL) capabilities.

## Tech Stack
- **HTML5** – Semantic markup (`index.html`)
- **CSS3** – Custom properties, Flexbox, Grid, animations (`styles.css`)
- **JavaScript (ES6+)** – Vanilla JS for interactivity (`main.js`)
- **No build system** – Pure static files, no npm/node_modules

## External Dependencies (CDN)
- Font Awesome 6 (icons)
- Plus Jakarta Sans via Google Fonts

## Project Structure
```
.
├── index.html        # Main entry point and all page content
├── styles.css        # All styles and design tokens
├── main.js           # Client-side interactivity (sticky header, mobile menu, scroll animations)
├── design-system.md  # Art direction and design token documentation
└── README.md         # Project documentation (Russian)
```

## Running the Project
The app is served via Python's built-in HTTP server:
```
python3 -m http.server 5000 --bind 0.0.0.0
```

## Deployment
Configured as a **static** deployment with `publicDir: "."`.
