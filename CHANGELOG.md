# Changelog

All notable changes to Style Ai will be documented here.

## 0.1.0 - 2026-05-02

### Added

- Started the initial Style Ai MVP repository.
- Added product brief, requirements, architecture, roadmap, decision log, bug log, and testing checklist.
- Added Next.js App Router scaffold with TypeScript, Tailwind CSS, PWA manifest, service worker registration, and app icon.
- Added black/gold default theme plus Atelier and Chrome visual themes with local theme persistence.
- Added all requested MVP screens using typed mock data.
- Added Supabase-ready and initial payment placeholder modules without paid API calls.
- Updated the framework scaffold to current Next.js, React, and ESLint package lines after install surfaced an older vulnerable Next.js version.
- Added an npm override to keep Next.js on a patched PostCSS dependency while preserving the current stable framework line.

### Verified

- TypeScript, lint, production build, and dependency audits pass.
- Local production server route checks return 200 for all requested MVP screens.

## 0.1.1 - 2026-05-02

### Changed

- Updated product strategy for a non-technical founder.
- Changed launch strategy to PWA/web app first to avoid App Store and Play Store commissions.
- Replaced Stripe-first architecture with Paddle-first global subscription architecture.
- Added PayHere as an optional Sri Lanka/local and USD payment backup.
- Added affiliate/referral system as a day-one product and database requirement.
- Updated pricing strategy to Free basic scan, Starter, Premium, and Elite.
- Updated mock pricing data and payment placeholders from Stripe terminology to Paddle terminology.

### Added

- Added `PAYMENTS_STRATEGY.md`.
- Added `AFFILIATE_SYSTEM.md`.
- Added clear completion, changed-files, blocked, and next-build summary to `CODEX_TASKS.md`.
- Switched local dev and build scripts to Webpack mode to avoid Turbopack sandbox port-binding issues in this workspace.

### Simplified

- Reduced affiliate MVP design to `affiliates`, `referrals`, and `commissions`.
- Deferred complex referral link, click, attribution, and payout tracking tables.

### Verified

- TypeScript, lint, and production build pass after the Paddle/affiliate strategy update.
