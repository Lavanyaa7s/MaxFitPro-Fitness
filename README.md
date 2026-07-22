# MAXFITPRO Fitness — Premium React Web Application

A modern, high-performance, mobile-first website for **MaxFitPro Fitness** built with React, Vite, TailwindCSS, and Framer Motion.

---

## 📁 Project File Structure

```text
maxfitpro-react/
├── public/
│   └── images/              # All high-resolution image assets (hero.webp, Logo.png, etc.)
├── src/
│   ├── components/          # Reusable Layout Components
│   │   ├── Navigation.jsx   # Top Header Nav & Mobile Bottom Tab Bar (with Active Scroll State)
│   │   ├── Footer.jsx       # Redesigned Footer & CTA Banner
│   │   └── SmoothScroll.jsx # Lenis Smooth Scroll Configuration
│   ├── sections/            # Page Sections (Listed in order of appearance)
│   │   ├── Hero.jsx         # Hero Section & Athlete Model
│   │   ├── About.jsx        # Vision, Story & Stat Cards
│   │   ├── Classes.jsx      # Training Zones (Free Weights, Machines, Cardio Deck)
│   │   ├── WhyChooseUs.jsx  # Gym Standard & Pillars
│   │   ├── Trainers.jsx     # Meet the Roster (Coaches & Personal Trainers)
│   │   ├── Testimonial.jsx  # Member Reviews & Transformations
│   │   ├── Pricing.jsx      # Membership Packages (Basic, Pro, Elite VIP)
│   │   └── Locations.jsx    # Gym Locations (HQ Pontian & Branch Two)
│   ├── App.jsx              # Main Page Assembly
│   ├── index.css            # Global Styling System & Custom Fonts
│   └── main.jsx             # React App Entry Point
└── package.json             # Dependencies & Scripts
```

---

## 🛠️ How to Edit Content

If you need to make quick text or content updates:

- **Change Membership Prices or Features:** Open `src/sections/Pricing.jsx`
- **Change Gym Hours or Contact Info:** Open `src/sections/Locations.jsx` or `src/components/Footer.jsx`
- **Change Trainers or Roles:** Open `src/sections/Trainers.jsx`
- **Change Training Zones:** Open `src/sections/Classes.jsx`
- **Change Hero Headline Text:** Open `src/sections/Hero.jsx`

---

## 🚀 How to Run Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Local Development Server:**
   ```bash
   npm run dev
   ```

3. **Build Production Bundle:**
   ```bash
   npm run build
   ```

---

© MAXFITPRO FITNESS. Built for High Performance.
