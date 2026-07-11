# Vishwam AI

**Founder:** Nitish Kumar Singh

---

# Vision

Build an AI companion that empowers people to grow through learning, wellness, wisdom, and purposeful career development.

**Powered by Wisdom. Guided by Intelligence.**

---

# Mission

Create a trusted AI companion that integrates timeless human wisdom with modern artificial intelligence to help individuals learn, grow, and thrive throughout life.

---

# Product Name

Vishwam AI

---

# Tagline

Powered by Wisdom. Guided by Intelligence.

---

# Four Core Pillars

## 🌍 Vishwam Learn

- English Communication
- AI Learning
- Career Guidance

---

## 🧘 Vishwam Wellness

- Yoga
- Meditation
- Breathing Practices
- Daily Habits

---

## 🕉 Vishwam Wisdom

A dedicated space to explore timeless teachings from Indian knowledge traditions for learning, reflection, and personal growth.

Topics include:

- Sanskrit Chanting
- Vishnu Sahasranama
- Lalitha Sahasranama
- Saundarya Lahari
- Bhagavad Gita
- Patanjali Yoga Sutras
- Upanishads
- Indian Philosophy

---

## 💼 Vishwam Career

- Resume Builder
- Interview Preparation
- Freelancing
- AI Career Roadmaps
- Productivity
- Personal Growth

---

# Development Start

Date:
02 July 2026

Status:
Day 1

---

# Milestone

✔ Development Environment Setup Started
# Vishwam AI Development Journal

---

# Day 1

Date:

02 July 2026

---

## Objectives

- Install Development Environment
- Setup Git
- Setup VS Code
- Create Startup Documentation
- Begin Product Architecture

---

## Completed

✅ Installed Node.js

✅ Installed VS Code

✅ Installed Git

✅ Created Project Structure

✅ Initialized Git Repository

✅ Created README

✅ Created Project Journal

---

## Problems Faced

- Node not recognized
- Git path issue
- Portable Git confusion

---

## Solutions

- Installed Node LTS
- Reinstalled Git
- Configured PATH
- Verified installation

---

## Learnings

Every startup begins with a clean development environment.

Small setup problems are normal and teach important engineering skills.

---

Next Step

Build the actual application.
# Project Journal

---

# Day 1 - Foundation Setup
**Date:** 02 July 2026

## Objective
Create the foundation for the Vishwam AI project and prepare a professional development environment.

---

## Completed Today

### Project Organization
- Created the main project folder: Vishwam-AI
- Created project subfolders:
  - assets/
  - branding/
  - design/
  - docs/
  - meeting-notes/
  - prompts/
  - research/
  - screenshots/

### Documentation
Created:

- README.md
- docs/Project-Journal.md

Documented:
- Vision
- Mission
- Brand positioning
- Founder information
- Project roadmap

### Development Environment

Installed and configured:

- Git
- Node.js
- npm
- Visual Studio Code

Verified installation using:

```bash
git --version
node -v
npm -v
code --version
```

Resolved:
- Git installation issues
- PATH environment problems
- Portable Git conflicts

### Git Setup

Configured Git identity:

```bash
git config --global user.name "Nitish Kumar Singh"
git config --global user.email "your-email@example.com"
```

Initialized repository:

```bash
git init
```

Created the first commit:

```bash
git add .
git commit -m "Initial startup documentation and project setup"
```

---

## Branding Decisions

### Founder

Nitish Kumar Singh

### Final Vision Statement

**Powered by Wisdom. Guided by Intelligence.**

### Core Philosophy

Vishwam Wisdom is presented as a space for exploring timeless teachings and universal wisdom traditions that support personal growth, reflection, and conscious living. Users are free to engage with these resources according to their own beliefs, interests, and journey.

---

## Key Learnings

Today I learned:

- Git basics
- Repository initialization
- Git commits
- Markdown documentation
- Professional project organization
- Installing and configuring developer tools
- Troubleshooting PATH and Git installation issues

---

## Challenges Faced

- Node.js not recognized in PowerShell
- Git installation issues
- Multiple Git installations
- Portable Git conflict
- Git identity configuration

Successfully resolved all issues.

---

## Next Steps (Day 2)

- Connect project to GitHub
- Create remote repository
- Push first commit
- Design overall system architecture
- Define AI modules
- Plan database structure
## Final Status

### ✅ Completed Today

- Created the Vishwam AI project structure.
- Initialized the Git repository.
- Configured Git with my developer identity.
- Created the project README.md.
- Created the Project Journal.
- Made the first Git commit.
- Created the GitHub repository.
- Connected the local repository to GitHub.
- Successfully pushed the initial project to GitHub.
- Verified the repository online.

### Challenges Faced

- Learned the difference between a repository URL and Git commands.
- Configured Git username and email before making the first commit.
- Understood the Git workflow:
  - git init
  - git add
  - git commit
  - git remote add origin
  - git push

### Key Learnings

- Git tracks every version of the project.
- GitHub provides a secure online backup and collaboration platform.
- A well-written README is the foundation of an open-source project.
- Documentation is as important as writing code.
- Professional development starts with planning and version control.

### Day 1 Outcome

✅ Vishwam AI foundation successfully established.

The project is now under version control, documented, backed up on GitHub, and ready for application development on Day 2.
---

# Day 2 - Architecture Setup

**Date:** 04 July 2026

## Objective

Establish the production-grade application architecture for Vishwam AI and initialize the frontend using Next.js.

---

## Tasks Completed

### Repository Architecture

Created the high-level project structure.

---

### Development Stack

Configured:

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- ESLint
- App Router

---

### Application Structure

Prepared folders for scalable development.
npm run dev


Verified locally at:


http://localhost:3000


---

### Version Control

Committed architecture setup.


feat(web): initialize Next.js application architecture


Successfully pushed to GitHub.

---

## Challenges

### Project Naming

`create-next-app` rejected the repository because of uppercase letters.

Resolution:

Created the application inside:


apps/web


instead of the repository root.

---

### Folder Structure

Initially created folders in the wrong location.

Corrected by recreating them inside the frontend application.

---

## Key Learnings

- Monorepo architecture
- Next.js App Router
- Repository organization
- Production-ready project structure
- Git workflow
- Local development server

---

## Status

✅ Architecture established.

✅ Frontend initialized.

✅ Development environment working.

✅ Ready to begin feature development.

---

## Next Day Goal

Begin implementing the Vishwam AI design system.

- Global Layout
- Theme Configuration
- Color System
- Typography
- Reusable UI Components

Day 1  ✅ Foundation & Git Setup
Day 2  ✅ Application Architecture & Development Environment
Day 3  ⏳ Design System & UI Foundation
Day 4  ⏳ Landing Page Layout
Day 5  ⏳ Authentication
...
# Day 3 – Design System & UI Foundation

**Date:** 05 July 2026

## Objective

Establish the UI foundation for Vishwam AI by creating a scalable design system, configuring the global layout, and building the initial landing page architecture.

---

## Work Completed

### Global Layout

- Updated `app/layout.tsx`
- Configured production-ready metadata
- Applied Geist Sans and Geist Mono fonts
- Added global Navbar and Footer layout
- Introduced a shared `<main>` content area

### Theme Foundation

- Configured Tailwind CSS v4 theme tokens
- Created brand color palette using CSS variables
- Added typography tokens
- Configured background and foreground theme colors
- Enabled smooth scrolling
- Added global CSS reset

### UI Components

Created reusable UI components:

- Container
- Section
- Heading

### Layout Components

Created reusable layout components:

- Navbar
- Footer

### Homepage

Created the initial Hero section featuring:

- Product introduction
- Primary heading
- Description
- Call-to-action buttons
- Responsive content container

Updated `app/page.tsx` to render the Hero component.

---

## Architecture Decisions

- Adopted component-based architecture.
- Separated reusable UI components from layout components.
- Used Tailwind CSS v4 design tokens.
- Centralized brand colors using CSS variables.
- Configured reusable global layout using the Next.js App Router.

---

## Folder Structure

```
components
├── home
│   └── Hero.tsx
│
├── layout
│   ├── Navbar.tsx
│   └── Footer.tsx
│
└── ui
    ├── Container.tsx
    ├── Heading.tsx
    └── Section.tsx
```

---

## Skills Learned

- Next.js App Router layouts
- Tailwind CSS v4 theme configuration
- Design system fundamentals
- Reusable React components
- Component organization
- Global layout architecture
- Metadata configuration

---

## Outcome

Successfully established the UI foundation of Vishwam AI with a scalable architecture, reusable components, and the first landing page section.


📅 VISHWAM AI – Day 4 Development Journal

Date: 10 July 2026

Objective

Build a reusable UI Design System and complete a responsive landing page using Next.js, React, TypeScript, and Tailwind CSS.

Work Completed
1. Built Reusable UI Components

Created reusable components inside components/ui:

Container
Section
Heading
Button
Badge
Card
SectionTitle

These components establish a scalable design system that will be reused across future pages.

2. Improved Section Component

Enhanced the Section component to support native HTML attributes by extending:

HTMLAttributes<HTMLElement>

This allows properties such as:

id
className
style
aria-label
event handlers

Example:

<Section id="features">

instead of creating custom props.

3. Built Landing Page Sections

Created reusable Home components:

Hero
Features
Mission
CTA (Call To Action)

Each section was built using reusable UI components instead of duplicated HTML.

4. Dynamic Feature Cards

Implemented feature cards using an array and .map().

Features included:

Learn Faster
AI Mentor
Progress Tracking

This approach keeps the UI scalable and easier to maintain.

5. Navigation Improvements

Updated Navbar links:

#features
#mission
#contact

Connected them with section IDs for smooth page navigation.

6. Smooth Scrolling

Enabled smooth scrolling globally.

html {
    scroll-behavior: smooth;
}

Navigation now scrolls smoothly between sections.

7. Updated Home Page

Organized the landing page into reusable sections.

<Hero />
<Features />
<Mission />
<CTA />

This keeps the project modular and maintainable.

8. Responsive Testing

Tested the application using Chrome DevTools.

Devices tested:

iPhone SE
iPad Mini
Responsive Desktop

Verified:

Hero layout
Features grid
Mission section
CTA section
Navbar
Buttons
Card spacing

No major responsive issues were found.

9. UI Review

Verified:

Consistent spacing
Typography hierarchy
Card alignment
Responsive grid
Sticky navigation
Smooth scrolling
Reusable component structure
Challenges Faced
Section IDs not working

Initially, navigation links were not scrolling because the Section component did not accept native HTML attributes.

Resolved by extending:

HTMLAttributes<HTMLElement>
Duplicate Hero Buttons

Accidentally duplicated the Hero button group while editing.

Removed the duplicate and cleaned the layout.

Hero Card Placement

Initially placed a reusable Card component inside the Hero section.

Removed it after deciding to keep the Hero focused and minimal.

Responsive Testing

Learned how to use Chrome DevTools Device Toolbar to validate layouts across multiple screen sizes.

Git Activity
Commit
git commit -m "feat(ui): complete responsive landing page with reusable design system"
Push

Successfully pushed changes to GitHub.

Commit Hash:

af2fecc
Terminal Output
✓ Compiled in 229ms

GET / 200
GET / 200
GET / 200
GET / 200

Git Commit:
feat(ui): complete responsive landing page with reusable design system

Push Successful

Commit:
af2fecc
Files Added
apps/web/components/home/

├── CTA.tsx
├── Features.tsx
├── Mission.tsx

apps/web/components/ui/

├── Badge.tsx
├── Button.tsx
├── Card.tsx
├── SectionTitle.tsx
Files Updated
app/page.tsx
app/layout.tsx
components/home/Hero.tsx
components/layout/Navbar.tsx
components/ui/Section.tsx
globals.css
Skills Learned
React Component Composition
Reusable UI Architecture
TypeScript HTMLAttributes
Props Forwarding
Dynamic Rendering using .map()
Responsive Design
Tailwind CSS Grid & Flexbox
Smooth Scrolling Navigation
Landing Page Structuring
Chrome DevTools Responsive Testing
Git Commit & Push Workflow
Outcome

Successfully completed the reusable UI Design System for Vishwam AI.

The project now includes:

Modular UI components
Responsive landing page
Dynamic feature cards
Sticky navigation
Smooth scrolling
Reusable section architecture
Mobile, tablet, and desktop compatibility

This provides a strong foundation for developing future pages and features while maintaining clean, scalable, and maintainable code.

Next Goal (Day 5)
Transform the landing page into a production-quality SaaS homepage.
Improve the Hero section with a professional two-column layout.
Introduce SVG/Lucide icons.
Enhance visual hierarchy and spacing.
Add polished UI refinements while continuing to build reusable components.