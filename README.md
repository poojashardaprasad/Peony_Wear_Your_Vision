# 🌸 PEONY Atelier — Bespoke Haute Couture & AI Drape Studio

> A luxury digital fashion atelier enabling clients to design, visualize, and commission customized couture garments with instant WhatsApp master tailor consultations.

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Node.js-Express-black?logo=express)](https://expressjs.com/)

---

## ✨ Features

- **Guided 4-Step Bespoke Journey**:
  1. **Silhouette & Category Selection**: Ethnic wear (Lehengas, Anarkalis, Sherwanis), western evening gowns, co-ord sets, skirts, and tuxedos for all genders.
  2. **Sketch & Moodboard**: Choose hand-drawn draping templates, browse curated reference looks, search Pinterest, or upload personal photo inspirations.
  3. **Fabric Swatches & Fit**: Explore premium textiles (Mulberry Silk, Raw Silk, Organza, Velvet, Chiffon, Linen) with weave specs, care guides, and custom measurement metrics.
  4. **Embellishments & Finishes**: Personalize accents with Zardozi handwork, pearl piping, mirror work, and delivery deadlines.
- **AI Couture Visualizer**: Synthesizes the chosen silhouette cut with real fabric weaves to render an instant photorealistic visual drape.
- **WhatsApp Direct Atelier Handoff**: Automatically compiles the complete spec recipe (metrics, fabric, trims, and generated image link) and routes directly to the master tailor via WhatsApp (`+91 87674 61199`) for accurate stitching quotes.
- **Image Sharing & Download**: Built-in Web Share API to attach generated couture designs directly into chat or download high-resolution mockups.
- **Zero Friction**: Pure client-to-craftsman workflow without mandatory account sign-up walls.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS v4, React Router v6, Lucide Icons
- **Backend**: Node.js, Express, `tsx`, `esbuild`
- **Visualization**: AI-assisted drape synthesis pipeline with procedural fallback rendering
- **Integration**: WhatsApp Click-to-Chat protocol & Web Share API

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/peony-atelier.git

# Navigate into the project folder
cd peony-atelier

# Install dependencies
npm install

# Start the full-stack development server
npm run dev
```

The application will be running locally at `http://localhost:3000`.

---

## 📁 Project Structure

```
├── src/
│   ├── components/      # UI components (Header, Footer, Recipe Sidebar, IconRenderer)
│   ├── context/         # Central DesignContext state manager
│   ├── data/            # Preset categories, sketches, fabrics, and swatches
│   ├── pages/           # Step views (Home, Category, Sketch, Fabric, Preview, Quote)
│   ├── App.tsx          # Router configuration
│   └── main.tsx         # React application root
├── server.ts            # Express server & outfit generation API endpoints
└── package.json
```


