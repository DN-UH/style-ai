# Roadmap

## Phase 0: Repository Foundation

- Create MVP documentation.
- Scaffold Next.js App Router with TypeScript and Tailwind CSS.
- Build luxury theme system and PWA shell.
- Add mock data and placeholder architecture.
- Ship all requested MVP screens.

## Phase 1: Founder-Safe Strategy Update

- Launch as a mobile-friendly PWA/web app first.
- Avoid App Store and Play Store commissions at launch.
- Replace Stripe-first thinking with Paddle-first global subscriptions.
- Keep PayHere as an optional later Sri Lanka/local and USD backup.
- Add affiliate/referral system from day one.

## Phase 2: Supabase Foundation

- Add Supabase Auth.
- Create profile, subscription, entitlement, affiliate, and referral tables.
- Persist onboarding progress and questionnaire answers.
- Implement secure photo uploads to Supabase Storage.
- Add row-level security policies.

## Phase 3: Affiliate MVP

- Give each affiliate user one referral code.
- Route referral links through `/r/{code}`.
- Track who referred who and whether the referred user paid.
- Add affiliate dashboard metrics.
- Connect Paddle paid subscription events to commission records.
- Support 40% subscription commission on paid referrals.
- Add simple founder commission approval view.

## Phase 4: Paddle Subscription Launch

- Configure Paddle products and prices:
  - Free basic scan
  - Starter: $9.99/month
  - Premium: $19.99/month
  - Elite: $49.99/month
- Build server-side Paddle checkout creation.
- Build Paddle webhook handler.
- Sync subscription and entitlement status into Supabase.
- Add failed payment and cancellation handling.

## Phase 5: AI Styling Engine And Reports

- Add OpenAI API server-side image/style analysis.
- Generate style profiles and recommendations.
- Generate brand books.
- Add server-side PDF generation.
- Store generated report metadata in Supabase.

## Phase 6: PayHere Backup

- Add PayHere only after Paddle is stable.
- Normalize PayHere events into the same subscription and entitlement model.
- Support local/Sri Lanka payment campaigns if needed.

## Phase 7: Native App Wrappers

- Wrap the PWA into iOS and Android apps only after web revenue is validated.
- Keep subscription purchase strategy compliant with app store rules before enabling native distribution.

## Phase 8: Launch Readiness

- Security review.
- Accessibility audit.
- Performance budget.
- Production monitoring.
- Legal/privacy review for uploaded images, AI outputs, payments, and affiliate commissions.
