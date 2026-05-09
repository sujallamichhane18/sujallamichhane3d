# Sujal Lamichhane - 3D Security Portfolio

A 3D portfolio site for Sujal Lamichhane, focused on security services, SOC
operations, and penetration testing. Built with React, Vite, and Three.js, with
GSAP-driven motion and a custom 3D character scene.

## Features

- 3D character scene with Three.js and react-three-fiber
- Smooth scrolling and motion effects via GSAP
- Portfolio carousel and role-focused sections
- Responsive layout for desktop and mobile

## Tech Stack

- React + TypeScript + Vite
- Three.js, @react-three/fiber, @react-three/drei
- @react-three/rapier for physics
- GSAP (ScrollTrigger, ScrollSmoother)
- react-icons, react-fast-marquee

## Getting Started

1. Install dependencies:
	```bash
	npm install
	```
2. Start the dev server:
	```bash
	npm run dev
	```
3. Open the URL printed in the terminal (Vite uses `--host`).

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run preview` - Preview the build
- `npm run lint` - Lint the codebase

## Content Updates

Edit these files to update content and links:

- `src/components/Landing.tsx` - Name and hero titles
- `src/components/About.tsx` - About summary
- `src/components/WhatIDo.tsx` - Services
- `src/components/Work.tsx` - Portfolio projects
- `src/components/Career.tsx` - Experience timeline
- `src/components/Contact.tsx` - Contact details
- `src/components/Navbar.tsx` - Nav labels and CTA
- `src/components/SocialIcons.tsx` - Social links and CTA button

## Assets

- `public/models/` - HDR and character assets
- `public/images/` - Project images and textures
- `public/draco/` - Draco decoder used by Three.js

## License

See the `LICENSE` file for details.
