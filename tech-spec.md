# Sunshine Coffee - Technical Specification

## Dependencies

### Runtime

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI framework |
| react-dom | ^18.2.0 | React DOM renderer |
| gsap | ^3.12.0 | Scroll animations, ScrollTrigger, parallax |
| lucide-react | ^0.400.0 | Icons (Menu, X, Phone, MapPin, Clock, Instagram, Facebook, Heart) |

### Dev

| Package | Version | Purpose |
|---------|---------|---------|
| typescript | ^5.0.0 | Type safety |
| vite | ^5.0.0 | Build tool |
| @vitejs/plugin-react | ^4.0.0 | React support for Vite |
| tailwindcss | ^3.4.0 | Utility CSS |
| postcss | ^8.4.0 | CSS processing |
| autoprefixer | ^10.4.0 | Vendor prefixes |
| @types/react | ^18.2.0 | React type definitions |
| @types/react-dom | ^18.2.0 | React DOM type definitions |

## Component Inventory

### Layout

| Component | Source | Notes |
|-----------|--------|-------|
| Navigation | Custom | Fixed nav, transparent → solid on scroll, mobile hamburger overlay |
| Footer | Custom | 4-column dark footer with chalkboard decoration |

### Sections

| Component | Notes |
|-----------|-------|
| HeroSection | Full viewport, parallax background + content layers |
| HistorySection | Two-column: polaroid collage + text with dog portraits |
| ProductsSection | Three-column product cards, "FAVORITO" badge on first |
| MomentsSection | Horizontal polaroid gallery with scattered rotations |
| CommunitySection | Two-column: community CTA + social icons + photo strip |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| PolaroidPhoto | Custom | HistorySection, MomentsSection — white frame, rotation, hover effect |
| ProductCard | Custom | ProductsSection — image, title, description, optional badge |
| DogPortrait | Custom | HistorySection — circular photo with name + traits |
| SectionHeader | Custom | HistorySection, ProductsSection, MomentsSection — icon + uppercase label |
| SocialIcon | Custom | CommunitySection, Footer — circular bordered icon button |

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Hero parallax layers | GSAP ScrollTrigger | Three-layer translateY at different speeds on scroll | Medium |
| Nav background transition | GSAP ScrollTrigger | Toggle Cream background + shadow at hero threshold | Low |
| Section fade-up reveals | GSAP ScrollTrigger | Batch apply: opacity 0→1, y 40→0, stagger 0.15s | Medium |
| Polaroid reveal + settle | GSAP ScrollTrigger | Exaggerated rotation start → final rotation, opacity, scale | Medium |
| Leaf float keyframes | CSS @keyframes | Pure CSS infinite translateY ±8px, 6s duration | Low |
| Decorative parallax drift | GSAP ScrollTrigger | translateY at 0.5x speed, optional slight x drift | Low |
| Photo hover effect | CSS transitions | scale, shadow, rotation reduction on :hover | Low |
| Button hover fills | CSS transitions | background-color, border-color 0.3s ease | Low |
| Smooth scroll | Native | scroll-behavior: smooth + GSAP ScrollTrigger scrollTo | Low |

## State & Logic

- **Scroll progress tracking**: Single scroll listener drives all GSAP ScrollTrigger instances. No React state needed — GSAP handles animations imperatively.
- **Mobile menu**: Simple `useState` boolean for menu open/close. No external library.
- **Active nav section**: Can be derived from ScrollTrigger `onEnter`/`onLeave` callbacks, but not strictly required for MVP.

## Other Key Decisions

- **No shadcn/ui components used**: The design is fully custom with organic, hand-drawn aesthetics. No standard UI primitives (dialogs, forms, tables) are needed. All components are custom-built.
- **GSAP over Framer Motion**: The design specifies many scroll-linked parallax and stagger effects. GSAP ScrollTrigger provides more precise scrub-based control for parallax layers and batch reveals.
- **Single page, no routing**: React Router not needed. Anchor links scroll to sections.
- **PolaroidPhoto as core primitive**: Used across 2 sections with ~7 instances. Accepts rotation angle, image src, and optional caption as props.
- **Images served from `/images/`**: All assets copied to `public/images/`, referenced via absolute paths.
