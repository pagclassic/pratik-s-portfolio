
# Dev / Vibe Coder Mode Toggle

## Overview
Add a sleek toggle at the top of your portfolio that switches between **Dev Side** (your current electronics/IoT portfolio) and **Vibe Coder Side** (your AI-built web projects). The Vibe Coder side will have a special welcome message, a different color theme (purple/cyan vibes), and extra animations to make it feel more alive and fun.

---

## What Each Mode Looks Like

### Dev Side (current look, no changes)
- Dark blue/indigo theme
- Electronics and IoT projects, skills, education
- Current animations stay as-is

### Vibe Coder Side (new, more animated)
- Purple/cyan/neon color scheme -- feels more creative and energetic
- Welcome toast: "Welcome to my more loved side!" with a sparkle emoji when switching
- Extra animations: floating particles with brighter colors, text typing effect in hero, glowing card borders, staggered entrance animations
- Shows web/vibe-coded projects (like this portfolio)
- Different skills: React, TypeScript, Tailwind, Lovable, Framer Motion
- Different hero text and about description

---

## Implementation Steps

### 1. Create Mode Context (`src/contexts/ModeContext.tsx`)
- React context storing `"dev"` or `"vibecoder"` mode
- Persists choice in localStorage
- When switching to vibecoder, shows a welcome toast: "Welcome to my more loved side!"
- Applies different CSS variables for the vibecoder theme

### 2. Create Mode Toggle Component (`src/components/ModeToggle.tsx`)
- Pill-shaped toggle fixed below the navbar
- Two options with icons:
  - Dev Side (circuit board icon)
  - Vibe Coder Side (sparkles icon)
- Glassmorphism styling matching the navbar
- Animated sliding indicator with gradient highlight
- Smooth transition animation when switching

### 3. Create Vibe Coder Projects Data (`src/data/vibeProjects.ts`)
- Same `Project` interface as existing projects
- First project: This portfolio website itself
- Easy to add more vibe-coded projects later

### 4. Add Vibe Coder Theme Variables (`src/index.css`)
- New CSS class `.vibecoder-theme` with different color variables:
  - Primary: purple/violet tones
  - Accent: cyan/teal tones  
  - Slightly different background tints
- The class gets toggled on `<html>` when switching modes

### 5. Enhanced Animated Background for Vibe Coder (`src/components/AnimatedBackground.tsx`)
- In vibecoder mode: brighter particle colors (purple, cyan, pink), more particles, faster movement
- Add subtle pulsing glow orbs in the background
- Keep current dark particles for dev mode

### 6. Update Hero Section (`src/components/HeroSection.tsx`)
- Dev mode: Current text (Electronics and IoT Enthusiast)
- Vibe Coder mode:
  - Title: "Hi, I'm Pratik" (same)
  - Subtitle: "Vibe Coder | Building Web Apps with AI"
  - Description: About building web apps using AI tools like Lovable
  - Extra animation: text has a subtle glow/shimmer effect

### 7. Update About Section (`src/components/AboutSection.tsx`)
- Dev mode: Current skills (ESP32, IoT, Raspberry Pi, C++)
- Vibe Coder mode: Different skills (React, TypeScript, Tailwind CSS, Lovable/AI Tools)
- Different about text describing your vibe coding journey
- Cards have animated gradient borders in vibe coder mode

### 8. Update Projects Section (`src/components/ProjectsSection.tsx`)
- Uses dev projects or vibe projects based on mode
- Vibe coder project cards get extra hover effects (glow, scale, tilt)

### 9. Update All Projects Page (`src/pages/AllProjects.tsx`)
- Shows the correct project list based on active mode

### 10. Update Resume Section (`src/components/ResumeSection.tsx`)
- Vibe Coder mode: Show web-related skills instead of hardware skills in the Technical Skills list

### 11. Wrap App with Mode Provider (`src/App.tsx`)
- Wrap entire app with `ModeProvider` so all pages can access the mode

### 12. Add Toggle to Index Page (`src/pages/Index.tsx`)
- Place `ModeToggle` component right after the Navbar

---

## New Animations for Vibe Coder Side (in `tailwind.config.ts`)
- `glow-pulse`: Subtle pulsing glow on cards and text
- `shimmer`: Text shimmer/shine effect for headings
- `float`: Smooth floating animation for decorative elements
- `gradient-shift`: Animated gradient border that shifts colors

---

## Files Summary

| New Files | Purpose |
|-----------|---------|
| `src/contexts/ModeContext.tsx` | Mode state management + welcome toast |
| `src/components/ModeToggle.tsx` | The toggle UI component |
| `src/data/vibeProjects.ts` | Vibe-coded projects data |

| Modified Files | Changes |
|----------------|---------|
| `src/index.css` | Add `.vibecoder-theme` CSS variables |
| `tailwind.config.ts` | Add new animation keyframes |
| `src/App.tsx` | Wrap with ModeProvider |
| `src/pages/Index.tsx` | Add ModeToggle component |
| `src/components/AnimatedBackground.tsx` | Mode-aware particle colors/count |
| `src/components/HeroSection.tsx` | Conditional text + extra animations |
| `src/components/AboutSection.tsx` | Conditional skills + descriptions |
| `src/components/ProjectsSection.tsx` | Mode-specific project data |
| `src/components/ResumeSection.tsx` | Mode-specific technical skills |
| `src/pages/AllProjects.tsx` | Mode-specific project listing |
