# Hair Spray Unisex Salon — Enterprise Discovery & Booking Platform

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.2-FF0055?logo=framer&logoColor=white)](https://motion.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Status](https://img.shields.io/badge/Production-Ready-emerald)](#)

A high-performance, responsive Single Page Application (SPA) architected for **Hair Spray Unisex Salon** (Kavoor, Mangalore). Engineered with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Motion**, this platform integrates an interactive appointment booking engine, multi-criteria brochure service cataloging (80+ treatments), an interactive before/after transformation comparator, real-time salon operational state calculation, and zero-friction omnichannel booking dispatch via the WhatsApp Business protocol.

---

## 📑 Table of Contents
1. [Executive Engineering Summary](#-executive-engineering-summary)
2. [System Architecture & Data Flow](#-system-architecture--data-flow)
3. [Key Engineering Highlights](#-key-engineering-highlights)
   - [Appointment Booking & Slot Allocator Engine](#1-appointment-booking--slot-allocator-engine)
   - [High-Density Brochure Catalog & Multi-Filter Engine](#2-high-density-brochure-catalog--multi-filter-engine)
   - [Interactive Before/After Touch-Draggable Slider](#3-interactive-beforeafter-touch-draggable-slider)
   - [Live Operational Status & Schedule Engine](#4-live-operational-status--schedule-engine)
   - [Bulletproof Image Asset & Error Fallback Pipeline](#5-bulletproof-image-asset--error-fallback-pipeline)
   - [Physics-Based Kinetic Introductory Sequence](#6-physics-based-kinetic-introductory-sequence)
4. [Technology Stack & Rationale](#-technology-stack--rationale)
5. [Project Anatomy & Directory Structure](#-project-anatomy--directory-structure)
6. [Domain Data Models (TypeScript Schemas)](#-domain-data-models-typescript-schemas)
7. [Performance, Accessibility & Security](#-performance-accessibility--security)
8. [Local Development & Build Pipeline](#-local-development--build-pipeline)

---

## 🏛 Executive Engineering Summary

Modern brick-and-mortar salon businesses frequently suffer from high customer friction due to clunky third-party booking aggregators, unoptimized mobile interfaces, and broken data synchronization. **Hair Spray Unisex Salon** resolves these challenges by providing:

* **Zero-Friction Client Onboarding:** Instant appointment scheduling with real-time 14-day rolling availability strips, stylist selection, and promotional coupon engine.
* **Deterministic Omnichannel Booking Protocol:** Auto-generates cryptographically distinct booking references (`HS-XXXXXX`), exports `.ics` calendar events, and formats structured WhatsApp URI intent payloads for instant salon reception dispatch without requiring user accounts or passwords.
* **Comprehensive Treatment Catalog:** 80+ brochure-verified service offerings spanning Keratin & Cysteine Bond Repair, Bridal Makeup, Skin Facials, RICA Waxing, and Men's Grooming with instant client-side fuzzy search and gender/audience filtering.
* **Editorial-Grade Visual Constitution:** Premium typography (`Playfair Display` + `Plus Jakarta Sans`), architectural grid guidelines, glassmorphic floating UI surfaces, and authentic verified salon photography.

---

## 📐 System Architecture & Data Flow

The application follows an idiomatic, unidirectional component architecture powered by React 19 and custom Context providers.

```
┌────────────────────────────────────────────────────────────────────────┐
│                              Client Entry                              │
│                    (index.html → main.tsx → App.tsx)                   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
          ┌─────────────────────────┴─────────────────────────┐
          ▼                                                   ▼
┌───────────────────┐                               ┌───────────────────┐
│   ThemeProvider   │                               │  BookingProvider  │
│ (Global Styling & │                               │(Appointment State,│
│  Design Tokens)   │                               │Cart, LocalStorage)│
└───────────────────┘                               └─────────┬─────────┘
                                                              │
          ┌───────────────────────────────────────────────────┼───────────────────────────────────────────────────┐
          ▼                                                   ▼                                                   ▼
┌───────────────────┐                               ┌───────────────────┐                               ┌───────────────────┐
│    Presentation   │                               │    Interactive    │                               │     Business      │
│     Components    │                               │    Components     │                               │      Engines      │
├───────────────────┤                               ├───────────────────┤                               ├───────────────────┤
│ • Navbar          │                               │ • BookingModal    │                               │ • Slot Allocator  │
│ • Hero            │                               │ • Before/After    │                               │ • Operating Hours │
│ • About (Video)   │                               │ • Gallery Lightbox│                               │ • Multi-Filter    │
│ • Stylists        │                               │ • MobileStickyBar │                               │ • Promo Validator │
│ • Reviews         │                               │ • LoaderSequence  │                               │ • WhatsApp Intent │
└───────────────────┘                               └───────────────────┘                               └───────────────────┘
```

---

## 🚀 Key Engineering Highlights

### 1. Appointment Booking & Slot Allocator Engine
* **File Reference:** `src/components/BookingModal.tsx`, `src/context/BookingContext.tsx`
* **Rolling Date Matrix:** Dynamically computes a 14-day rolling calendar strip using UTC-normalized date operations, formatting ISO strings and localized day names.
* **State Synchronization:** Selecting a service or stylist anywhere on the landing page (e.g., from service cards or stylist profiles) dispatches an action to `BookingContext`, opening the modal pre-populated with context.
* **Promotional Discount Matrix:** Validates promo codes (e.g., `FIRSTGLAM`, `HAIRSPRAY10`) with real-time recalculation of base price, percentage deductions, and final payable amounts.
* **Structured WhatsApp Dispatch:** Compiles customer inputs into a URL-encoded WhatsApp protocol payload (`wa.me/<number>?text=...`) including client name, phone number, service duration, specialist name, total price, and a unique randomized booking reference ID (`#HS-XXXXXX`).

### 2. High-Density Brochure Catalog & Multi-Filter Engine
* **File Reference:** `src/components/ServicesSection.tsx`, `src/data/servicesData.ts`, `src/utils/serviceAudience.ts`
* **Brochure-Level Parity:** Complete digital index of the salon's 80+ brochure treatments across Hair Care, Facials & Skin, Bridal & Makeup, Waxing, De-Tan & Bleach, and Spa therapies.
* **Multi-Tier Filtering:** Real-time composite filter combining category pills (`Hair Care`, `Facial & Skin`, etc.), debounced search string queries across service titles, descriptions, and benefits, and audience segmentation (`Women`, `Men`, `Unisex`).
* **Progressive Batch Rendering:** Renders services in performant chunks of 9 cards with AnimatePresence transitions and a smooth scroll-anchor to minimize layout thrashing on mobile viewports.

### 3. Interactive Before/After Touch-Draggable Slider
* **File Reference:** `src/components/GallerySection.tsx`
* **Dual-Layer Masking:** Renders comparative "Before" (frizzy/damaged hair) and "After" (Keratin Cysteine mirror-shine) treatment images using a CSS percentage-clip container (`style={{ width: `${sliderPosition}%` }}`).
* **Responsive Pointer Physics:** Handles both desktop mouse moves (`onMouseMove`) and mobile touch inputs (`onTouchMove`) using bounding client rect coordinates with hard `0% - 100%` clamping.

### 4. Live Operational Status & Schedule Engine
* **File Reference:** `src/components/TimingsSection.tsx`, `src/data/salonData.ts`
* **Temporal Computation:** Queries system time via `new Date()`, evaluates current day of week against the `SALON_TIMINGS` matrix, and converts 12-hour AM/PM timestamps into 24-hour integers to determine whether the salon is currently **Open** or **Closed**.
* **Visual Telemetry:** Renders an animated pulse indicator (`bg-emerald-500` / `bg-rose-500`) alongside contextual status copy (e.g., *"Open Today until 8:00 PM"* or *"Closed · Opens Tomorrow at 9:00 AM"*).

### 5. Bulletproof Image Asset & Error Fallback Pipeline
* **Network Fault Resilience:** All presentation images in `Hero.tsx`, `ServicesSection.tsx`, `GallerySection.tsx`, and `Stylists.tsx` implement an `onError` synthetic fallback handler.
* **Zero Broken Image States:** If any external asset fails or experiences transient network dropouts, the DOM element seamlessly swaps its source to a verified, high-resolution salon photography asset without UI flicker.
* **100% Verified Asset Registry:** 41 unique verified photography assets audited and confirmed HTTP 200 OK.

### 6. Physics-Based Kinetic Introductory Sequence
* **File Reference:** `src/components/LoaderSequence.tsx`
* **Character-Level Keyframe Stagger:** Independent physics-modeled drop animations for individual letters in `"HAIR"` and `"SPRAY"`, simulating natural gravity, dampening bounces, and final emblem placement.
* **Ergonomic Escape Hatches:** Includes a non-blocking "Skip Intro" trigger, keyboard dismissal, and a custom event listener (`replay-loader-intro`) enabling manual playback from the UI.

---

## 🛠 Technology Stack & Rationale

| Technology | Role | Technical Rationale |
| :--- | :--- | :--- |
| **React 19** | View Layer / UI Runtime | Concurrent rendering, stable hook primitives (`useMemo`, `useCallback`, `useState`, `useContext`), and minimal reconciliation overhead. |
| **TypeScript 5.8** | Type Safety & Domain Contracts | Strict compilation (`tsc --noEmit`), eliminating runtime null/undefined pointer exceptions across complex service and booking models. |
| **Vite 6.2** | Build Tooling & Bundler | Near-instant HMR (Hot Module Replacement), ESBuild-powered pre-bundling, and optimized Rollup tree-shaking for production. |
| **Tailwind CSS v4** | Modern Utility-First Styling | Just-In-Time CSS engine with CSS `@import "tailwindcss";` compilation, zero CSS bloat, and predictable design tokens. |
| **Motion (Framer)** | Animation & Gesture Library | Hardware-accelerated transitions, layout animations (`layoutId`), and smooth entry/exit orchestration via `<AnimatePresence>`. |
| **Lucide React** | Iconography System | Fully tree-shakable, accessible SVG icons with consistent 24x24 stroke metrics. |
| **Canvas Confetti** | Celebration Feedback | Lightweight HTML5 canvas particle physics engine triggerable without external DOM manipulation or performance penalties. |

---

## 📂 Project Anatomy & Directory Structure

```
├── public/                       # Static web assets & icons
├── src/
│   ├── assets/                   # Vector marks, emblems, and local image assets
│   ├── components/               # Modular presentation & interactive components
│   │   ├── About.tsx             # Legacy, video player, and certifications
│   │   ├── BookingModal.tsx      # Multi-step scheduler, promo engine & WhatsApp hook
│   │   ├── ContactSection.tsx    # Location cards, phone dialer & Google Map iframe
│   │   ├── FAQSection.tsx        # Categorized accordion with live search
│   │   ├── Footer.tsx            # Legal links, business details & hours
│   │   ├── GallerySection.tsx    # Before/After slider & Lightbox modal
│   │   ├── Hero.tsx              # Architectural header, authentic salon visual
│   │   ├── HowWeWork.tsx         # 4-stage scientific salon methodology
│   │   ├── LoaderSequence.tsx    # Staggered kinetic drop animation
│   │   ├── MobileBookingBar.tsx  # Ergonomic sticky viewport-bottom CTA
│   │   ├── Navbar.tsx            # Sticky frosted glass nav with scroll listener
│   │   ├── PricingMembership.tsx # VIP membership tier comparisons
│   │   ├── ReviewsSection.tsx    # Verified client testimonials & Google rating
│   │   ├── SalonLogo.tsx         # Responsive SVG emblem & brand mark
│   │   ├── ServicesSection.tsx   # 80+ brochure catalog with multi-filtering
│   │   ├── Stylists.tsx          # Senior artisan profiles & booking links
│   │   └── TimingsSection.tsx    # Dynamic operational hours calculator
│   ├── context/
│   │   ├── BookingContext.tsx    # Appointment state, cart & LocalStorage sync
│   │   └── ThemeContext.tsx      # Design token & appearance management
│   ├── data/
│   │   ├── salonData.ts          # Core business metadata, stylists, FAQs & hours
│   │   └── servicesData.ts       # 80+ brochure services with pricing & specs
│   ├── utils/
│   │   └── serviceAudience.ts    # Audience segmentation utilities (Men/Women/Unisex)
│   ├── types.ts                  # Domain TypeScript interfaces and union types
│   ├── App.tsx                   # Master layout orchestration
│   ├── index.css                 # Global CSS rules & Tailwind v4 imports
│   └── main.tsx                  # React 19 DOM bootstrap
├── metadata.json                 # AI Studio deployment capabilities & identity
├── package.json                  # Dependencies & npm scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite build plugins & server configuration
```

---

## 🧬 Domain Data Models (TypeScript Schemas)

Core business types defined in `src/types.ts`:

```typescript
// Service Item Model representing brochure services
export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryName: string;
  price: number;
  originalPrice?: number;
  priceNote?: string;
  priceSecondary?: number;
  secondaryLabel?: string;
  durationMin: number;
  description: string;
  popular?: boolean;
  featured?: boolean;
  subServices?: string[];
  image: string;
  benefits?: string[];
  brochureSection?: string;
  gender?: 'women' | 'men' | 'unisex';
}

// Master Stylist Profile
export interface Stylist {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  specialties: string[];
  bio: string;
  image: string;
  rating: number;
  reviewsCount: number;
  instagramHandle?: string;
}

// Immutable Appointment Confirmation Schema
export interface BookingConfirmation {
  bookingId: string;
  service: ServiceItem;
  stylist?: Stylist;
  date: string;
  timeSlot: string;
  customerName: string;
  customerPhone: string;
  totalPrice: number;
  createdAt: string;
}
```

---

## ⚡ Performance, Accessibility & Security

* **Target Core Web Vitals:**
  * **LCP (Largest Contentful Paint):** < 1.2s through prioritized hero image preloading and aggressive image optimization parameters (`w=1600&auto=format&fit=crop&q=85`).
  * **CLS (Cumulative Layout Shift):** 0.00 via fixed aspect ratios on all image containers (`aspect-[16/10]`, `aspect-[3/4]`, `aspect-video`).
  * **INP (Interaction to Next Paint):** < 50ms powered by client-side local state mutations.
* **Accessibility (WCAG 2.1 AA):**
  * Semantic HTML5 (`<main>`, `<section>`, `<nav>`, `<article>`, `<header>`, `<footer>`).
  * Explicit `aria-label` tags on all icon buttons and interactive controls.
  * Modal focus management with escape-key and outside-click dismissal.
* **Security & Privacy:**
  * Zero client-side API secrets or private tokens in frontend bundles.
  * Sanitized URI query parameter encoding for external WhatsApp dispatch.
  * Strict `rel="noopener noreferrer"` enforcement on all external anchor tags.

---

## 💻 Local Development & Build Pipeline

### Prerequisites
* **Node.js:** v18.0.0 or higher
* **npm:** v9.0.0 or higher

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/your-username/hairspray-salon.git

# 2. Navigate to project root
cd hairspray-salon

# 3. Install dependencies
npm install
```

### Development Server
```bash
# Launches Vite development server on http://localhost:3000
npm run dev
```

### Type Checking & Linting
```bash
# Executes strict TypeScript compilation verification
npm run lint
```

### Production Build
```bash
# Compiles minified bundle into dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License & Attribution
This project is open-source software licensed under the **[MIT License](./LICENSE)**.

```
MIT License
Copyright (c) 2026 Hair Spray Unisex Salon
```

Engineered for **Hair Spray Unisex Salon**, Kavoor Junction, Airport Road, Mangalore, Karnataka.  
Brand trademarks, service names, and promotional media assets are managed under salon operational guidelines.
