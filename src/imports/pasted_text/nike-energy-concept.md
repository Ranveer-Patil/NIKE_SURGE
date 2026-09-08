You are a senior React, UI/UX, and product design engineer who specializes in premium product launch websites similar to Nike, Apple, and Gymshark.

I am building a **Nike-inspired energy drink concept website** for a competition. The idea is a sneaker-inspired energy drink brand where each drink flavor is inspired by famous sneaker colorways.

Your task is to **design and generate the full React website architecture and components** using **React + TailwindCSS + Framer Motion**.

The final result must look like a **premium product launch website similar to Nike SNKRS or Apple product pages**.

---

PROJECT CONCEPT

Brand name examples:
NIKE ENERGY
AIR ENERGY
SURGE ENERGY

Concept:
Energy drinks inspired by sneaker culture and athlete performance.

Each drink flavor represents a famous sneaker colorway.

Example flavors:

Air Energy – University Blue
Nike Energy – Chicago Red
Dior x Nike – Aero Ice
Cactus Energy – Travis Edition
Air Energy – Pollen Power

Each can should display:

160mg Caffeine
473ml
Energy Drink

---

IMPORTANT DESIGN RULES

1. Remove any Red Bull style branding or references.

2. The product must feel like a **Nike premium launch product**.

3. The UI must be **minimal, cinematic, and modern**.

4. Use a **black background with dramatic product lighting**.

5. Use **bold condensed typography similar to Nike headlines**.

---

WEBSITE STRUCTURE

Create a complete website with the following sections:

Navbar
Hero Section
Sneaker Inspiration Section
Performance Ingredients Section
Flavor Collection Section
Limited Drop Countdown Section
Athlete Lifestyle Section
Brand Story Section
Community / Social Section
Footer

---

HERO SECTION

The hero section should include:

Left side:
Large headline

Example:

AIR
ENERGY

Small product description

Buttons:

Shop Drop
Explore Collection

Right side:

Energy drink can with dramatic lighting.

Behind the can place a **large sneaker silhouette watermark** related to the flavor.

Sneaker watermark requirements:

opacity 5%
blur 4px
scale 120%
slight rotation

Add:

radial glow behind the can
soft spotlight lighting
floating animation

---

REMOVE SHOE THUMBNAIL SECTION

Remove any bottom thumbnail shoe gallery.

Instead, convert sneaker images into **background watermark graphics behind the energy drink cans**.

---

PERFORMANCE INGREDIENTS SECTION

Create cards explaining drink ingredients:

160mg Caffeine
Electrolytes
Taurine
B-Vitamins
Zero Crash Formula

Each card should include icons and subtle hover animations.

---

FLAVOR COLLECTION SECTION

Display all energy drink cans in a premium product lineup.

Each card shows:

can image
flavor name
accent color

Add hover animation:

scale slightly
glow color changes

---

LIMITED DROP SECTION

Create a section similar to Nike SNKRS launch pages.

Title:

LIMITED ENERGY DROP

Add a countdown timer.

Example:

03 : 11 : 24

Buttons:

Notify Me
Reserve Drop

---

ATHLETE LIFESTYLE SECTION

Create a section showing how athletes use the drink.

Headline:

Built For Performance

Text example:

Designed to deliver focus, endurance, and explosive energy during training and competition.

---

BRAND STORY SECTION

Explain the concept of sneaker-inspired energy.

Example story:

Inspired by sneaker culture and built for athlete performance, this concept reimagines energy drinks through the lens of sports design and product innovation.

---

VISUAL STYLE

Background:
pure black

Add:

radial lighting
soft grid texture
grain overlay

Typography:

bold condensed headlines
large hero text

Fonts similar to:

Bebas Neue
Oswald
Inter

---

ANIMATIONS

Use Framer Motion for:

hero slide transitions
floating can animation
hover effects
smooth fade transitions

Floating animation example:

y: [-10, 10, -10]
duration: 6 seconds
repeat: infinite

---

NAVBAR

Design a minimal Nike-style navbar.

Features:

hover underline animation
clean spacing
glass blur background
responsive mobile menu

---

CODE REQUIREMENTS

Return a complete React project structure.

Example folder structure:

src/
components/
Navbar.tsx
Hero.tsx
SneakerInspiration.tsx
Ingredients.tsx
FlavorCollection.tsx
LimitedDrop.tsx
AthleteSection.tsx
BrandStory.tsx
Community.tsx
Footer.tsx

animations/
assets/

pages/Home.tsx

App.tsx

---

IMPORTANT

Return:

1. full component architecture
2. React code for major sections
3. TailwindCSS styling
4. Framer Motion animations
5. clean professional code

The final design should feel like a **premium Nike energy drink product launch website with cinematic visuals and modern UI/UX**.
