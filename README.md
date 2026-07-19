# Korè — Nigeria's Agricultural Marketplace (Landing Page)

This repository contains the single-page application (SPA) landing page for **Korè**, a direct farm-to-buyer digital marketplace connecting Nigerian farmers, wholesalers, and traders with buyers. It features identity verification, escrow-secured payments, freshness labelling, and logistics coordination.

Operated by **IKORE LABS LTD** (RC 9614851).

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tooling**: [Vite 8](https://vite.dev/) (with fast React HMR)
- **Language**: [TypeScript](https://www.typescript.org/)
- **Routing**: [React Router DOM 7](https://reactrouter.com/) (using client-side SPA routing and navigation)
- **Styles**: Vanilla CSS for flexibility and low performance overhead.
- **Micro-interactions**: Powered by a custom vanilla JS layer ([src/script.js](file:///home/sam__ayo/dev/kore/Kore-landing/src/script.js)) driving button ripples, hover scaling, and toast alerts. FAQ accordion and scroll-triggers are handled natively via React states.

---

## 📂 Project Structure

```text
├── .husky/              # Git hooks (pre-commit, commit-msg)
├── lib/
│   └── waitlist.ts      # Waitlist API Client (submits to Google Apps Script Web App)
├── public/
│   ├── images/          # Image assets & illustrations (single source of truth)
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   ├── assets/
│   │   └── icons/       # Extracted React SVG component items
│   ├── components/
│   │   ├── FAQItem.tsx  # React FAQ Accordion unit
│   │   ├── StatCounter.tsx # React count-up animation component
│   │   ├── Layout.tsx   # Top-level route Layout orchestrator (manages scaling contexts)
│   │   ├── legal/       # Modular terms & privacy contents & stylesheet
│   │   │   ├── legal.css
│   │   │   ├── TermsContent.tsx
│   │   │   └── PrivacyContent.tsx
│   │   └── sections/    # Modular page layout sections
│   │       ├── BetterWay/
│   │       ├── CoreProblem/
│   │       ├── FAQ/
│   │       ├── FlowAndWhy/
│   │       ├── Footer/
│   │       ├── Hero/
│   │       ├── HowItWorks/
│   │       ├── Navbar/
│   │       ├── Story/
│   │       ├── Waitlist/
│   │       ├── WasteCrisis/
│   │       ├── WhyDifferent/
│   │       └── WhyKore/
│   ├── pages/           # Route entry page views
│   │   ├── Home.tsx     # Homepage entry wrapper
│   │   ├── Terms.tsx    # Terms and Conditions view (with scrollspy outline)
│   │   └── Privacy.tsx  # Privacy Policy view (with scrollspy outline)
│   ├── App.tsx          # Client-side router path setup
│   ├── index.css        # Global static companion stylesheet (resets, Figma viewports)
│   ├── main.tsx         # React root mounting node
│   ├── script.js        # Native JS interaction layer (ripple, hover, alerts)
│   └── script.d.ts      # TypeScript interfaces for script.js
├── tsconfig.json        # TypeScript configuration referencing app and node profiles
└── vite.config.ts       # Vite config (maps path aliases & injects environment vars)
```

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

Ensure you have Node.js installed, then run:

```bash
npm install
```

### 2. Configure Environment Variables

Copy the environment variables template:

```bash
cp .env.example .env.local
```

Open `.env.local` and configure your Google Apps Script deployment URL:

```env
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://script.google.com/macros/s/YOUR-ID/exec
```

### 3. Run Locally

Start the development server:

```bash
npm run dev
```

Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### 4. Build for Production

Verify typescript compiles and build the client bundle:

```bash
npm run build
```

The compiled output will be generated inside the `/dist` directory.

---

## 🛡️ Linting, Code Quality & Git Hooks

To maintain a clean codebase and collaborative environment, the following quality checks are configured:

1. **Conventional Commits**:
   Commit messages are validated using **Commitlint**. You must prefix commit messages with standard types:
   - `feat:` (New feature)
   - `fix:` (Bug fix)
   - `chore:` (Build/tooling/deps config)
   - `docs:` (Documentation updates)
   - `refactor:` (Code restructuring)

   _Example:_ `feat: add custom phone validation to waitlist submission`

2. **Pre-commit Formatting & Linting**:
   On running a commit, **Husky** triggers **Lint-staged**, running:
   - **Oxlint**: Quick linting of TypeScript/JavaScript code for errors and hook rules.
   - **Prettier**: Autoshapes files to conform to project style rules defined in [.prettierrc](file:///home/sam__ayo/dev/kore/Kore-landing/.prettierrc).
   - Any linting errors will block the commit from being completed until resolved.

3. **EditorConfig**:
   Enforces consistent line endings (`LF`), trim trailing whitespace, and indentation (2 spaces) across various editors using the [.editorconfig](file:///home/sam__ayo/dev/kore/Kore-landing/.editorconfig) file.

---

## ☁️ Deployment

The project is configured for deployment on **Vercel** with the following build configurations:

- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**: Add `NEXT_PUBLIC_WAITLIST_ENDPOINT` inside the Vercel dashboard settings.
