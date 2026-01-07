# IndustryIceberg - Enterprise Homepage

A production-grade, enterprise-level React homepage for IndustryIceberg, showcasing AI-driven products and services with a clean, light-themed, professional design.

## Features

- **Enterprise-Grade Design**: Light theme with professional styling inspired by TCS, Accenture, Infosys, and IBM
- **Animated Hero Section**: Word-by-word animated text that loops between sentences
- **Sticky Navigation**: Professional navbar with smooth dropdown menus
- **Product Showcase**: Detailed presentation of GMP Compliance and AI Drafting platforms
- **Customer Stories**: Enterprise testimonials with professional styling
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Production-Ready**: Clean, modular code structure ready for deployment

## Tech Stack

- React 18
- TypeScript
- Vite (Build Tool)
- CSS3 with modern features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
│   └── assets/          # Static assets (logos)
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── ProductsShowcase.tsx
│   │   ├── CustomerStories.tsx
│   │   └── Footer.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Design Philosophy

This homepage follows enterprise design principles:

- **Light Theme**: Clean, professional white/light gray backgrounds
- **Subtle Animations**: Calm, minimal animations that enhance rather than distract
- **Professional Typography**: Regular font weights, appropriate sizing
- **Clear Hierarchy**: Strong visual hierarchy for easy navigation
- **Enterprise Tone**: Suitable for enterprise clients, regulators, and partners

## Customization

### Updating Company Information

Edit the following files:
- `src/components/Footer.tsx` - Company address and contact info
- `src/components/ValueProposition.tsx` - Company value proposition

### Changing Colors

Update CSS variables in `src/index.css`:
```css
:root {
  --primary-blue: #0066cc;
  --primary-blue-dark: #0052a3;
  /* ... */
}
```

### Replacing Hero Video

Update the video source in `src/components/Hero.tsx` (line 16) with your own video URL.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 IndustryIceberg. All Rights Reserved.
