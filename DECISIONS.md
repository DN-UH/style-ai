# Decisions

## 2026-05-02: Use CSS Variable Theme Registry

Decision: Implement user-selectable visual themes through a small TypeScript theme registry and CSS variables.

Reason: The product needs a black/gold default while allowing future styles without rewriting components.

## 2026-05-02: Mock Paid And AI Integrations

Decision: Use typed mock data and placeholders for AI, Supabase, Paddle, PayHere, and affiliate surfaces.

Reason: The MVP should demonstrate product flow without introducing paid APIs, secret handling, or external runtime dependencies.

## 2026-05-02: Mobile-First App Shell

Decision: Build routes around a mobile-first shell with responsive navigation.

Reason: Fashion consultation and upload flows are likely to begin on phones, so the first experience should be comfortable on mobile.

## 2026-05-02: PWA First For Founder Economics

Decision: Launch Style Ai first as a mobile-friendly PWA/web app.

Reason: This avoids App Store and Play Store commissions during early revenue validation and keeps iteration manageable for a non-technical founder.

## 2026-05-02: Paddle-First Payments

Decision: Replace Stripe-first architecture with Paddle-first global subscriptions.

Reason: Stripe is not available for the founder in Sri Lanka, while Paddle is better aligned with global subscription sales and merchant-of-record operations.

## 2026-05-02: PayHere As Optional Backup

Decision: Keep PayHere as a later optional Sri Lanka/local and USD backup payment method.

Reason: PayHere may help with local payment coverage but should not block the global subscription MVP.

## 2026-05-02: Affiliate System From Day One

Decision: Build referral code generation, referral records, and commission tracking into the first revenue architecture.

Reason: Affiliates can drive low-cost acquisition, and commission tracking must be connected to successful subscription payment events rather than bolted on later.

## 2026-05-02: Simplify Affiliate System For MVP

Decision: Reduce affiliate storage to `affiliates`, `referrals`, and `commissions`.

Reason: Affiliate system intentionally simplified for MVP speed and faster time to revenue. Each user gets one referral code, referral links use `/r/{code}`, and commissions are created only after successful payment webhooks.

## 2026-05-02: GitHub Repository Defaults To Private

Decision: Publish the initial repository as private unless the founder explicitly requests public.

Reason: The repo contains early product strategy and founder operating assumptions.
