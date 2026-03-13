# Rohith Saravanakumar Portfolio

A modern, animated, dark-themed developer portfolio built with React, TypeScript, Vite, Framer Motion, and Tailwind-style utility classes.

This portfolio highlights Cloud, DevOps, Backend, and Software Engineering projects with recruiter-friendly sections and clean interactions.

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- Lucide React Icons

## Features

- Animated Hero section with profile image and CTA buttons
- Domain-based Skills section (Cloud, DevOps, Backend, Databases, Programming, etc.)
- Project section with detailed Problem and Solution storytelling
- Source code links for projects
- Custom project visuals (AI Downtime and Smart API Kill-Switch)
- Resume embed in About section with open/download actions
- Contact section with:
  - WhatsApp CTA for direct messaging
  - Gmail compose links for email icons

## Project Structure

```text
.
|-- App.tsx
|-- index.tsx
|-- constants.tsx
|-- types.ts
|-- components/
|   |-- About.tsx
|   |-- Contact.tsx
|   |-- Education.tsx
|   |-- Footer.tsx
|   |-- Hero.tsx
|   |-- Navbar.tsx
|   |-- Projects.tsx
|   |-- Skills.tsx
|   |-- ThemeSwitcher.tsx
|-- context/
|   `-- ThemeContext.tsx
|-- image/
|   |-- profile.jpg
|   `-- COLOR_REFERENCE/
|-- AI downtime.png
|-- Smart API.png
|-- Rohith_Saravanakumar.pdf
|-- package.json
`-- README.md
```

## Setup and Run

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Portfolio Sections

- Hero
- About
- Skills
- Projects
- Education
- Contact
- Footer

## Highlight Projects

### 1. AI DOWNTIME GUARD

Self-healing infrastructure monitoring system with automated detection and remediation patterns.

Source Code:
- https://github.com/rohith2511/AI_Downtime_System

### 2. Smart API Kill-Switch System (AWS Always Free Tier)

AWS-based alarm-driven API protection system that auto-throttles under abnormal traffic and restores normal limits when safe.

Source Code:
- https://github.com/rohith2511/API-Kill-Switch-System

## Customization Guide

### Update Profile Image

- Replace: `image/profile.jpg`

### Update Resume

- Replace: `Rohith_Saravanakumar.pdf`

### Update Project Content

- Edit: `constants.tsx` (`PROJECTS` array)

### Update Contact Links

- Edit: `components/Contact.tsx`
- Edit: `components/Navbar.tsx`

## Notes

- This project is configured as a Vite + React TypeScript app.
- If Node engine warnings appear, app may still run, but keeping Node up-to-date is recommended.

## License

This portfolio is personal-use code for Rohith Saravanakumar. Reuse with attribution.
