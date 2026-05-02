# Codex Tasks

This file tracks implementation progress for the Style Ai MVP repository.

## Current Summary

### 1. What Was Completed

- Updated Style Ai strategy for a non-technical founder.
- Confirmed PWA/web app first launch to avoid App Store and Play Store commissions.
- Replaced Stripe-first architecture with Paddle-first global subscription architecture.
- Added PayHere as optional Sri Lanka/local and USD payment backup.
- Added affiliate/referral system as a day-one requirement.
- Simplified affiliate/referral system for MVP speed and faster time to revenue.
- Updated pricing model:
  - Free basic scan
  - Starter: $9.99/month
  - Premium: $19.99/month as the main plan
  - Elite: $49.99/month
- Defined 40% subscription commission on paid referrals.
- Updated mock pricing data and payment placeholder modules to match Paddle-first strategy.

### 2. What Files Changed

- `PAYMENTS_STRATEGY.md`
- `AFFILIATE_SYSTEM.md`
- `CODEX_TASKS.md`
- `DECISIONS.md`
- `ARCHITECTURE.md`
- `ROADMAP.md`
- `CHANGELOG.md`
- `.env.example`
- `README.md`
- `PROJECT_BRIEF.md`
- `PRODUCT_REQUIREMENTS.md`
- `TESTING_CHECKLIST.md`
- `app/pricing/page.tsx`
- `app/affiliate/page.tsx`
- `lib/mock-data.ts`
- `lib/paddle/plans.ts`
- `lib/paddle/checkout.ts`
- `package.json`
- `BUGS.md`
- removed `lib/stripe/plans.ts`
- removed `lib/stripe/checkout.ts`

### 3. What Is Blocked

- GitHub push was retried after the user reported authentication was complete, but `gh auth status` still reports the `DN-UH` token is invalid.
- A fresh `gh auth login -h github.com -s repo --web` flow was started after the device success page, but this sandbox returned `error connecting to github.com`.
- GitHub App publishing is also blocked because no installed GitHub accounts are available in this session.
- Local git commit is prepared in sandbox git metadata with message `Initial Style Ai MVP strategy`.
- The workspace blocks writing a normal `.git` directory, so git metadata was kept in `/private/tmp/style-ai-git.git` for the local commit.
- Live Paddle integration is blocked until the founder has a Paddle account, products, prices, API key, and webhook secret.
- PayHere integration is blocked until merchant setup is approved and the business decides it is needed.
- Supabase implementation is blocked until database project credentials and schema approval are available.
- OpenAI image/style analysis is blocked until API key, usage budget, and safety rules are approved.
- Marking commissions as `paid` is blocked until payout method, tax/legal terms, and simple approval rules are approved.

### 4. What Should Be Built Next

- Initialize Supabase schema for profiles, subscriptions, entitlements, `affiliates`, `referrals`, and `commissions`.
- Build `/r/{code}` referral route and one-code-per-user referral generation.
- Build Paddle checkout and webhook server routes.
- Update account and affiliate dashboards to read from Supabase.
- Add OpenAI-powered style scan behind server-side entitlement checks.
- Add server-side PDF brand book generation.
- Create founder admin screens for subscriptions, affiliates, and simple commission approval.

## Task Log

| Status | Task | Notes |
| --- | --- | --- |
| Completed | Create MVP documentation set | Required docs have been created. |
| Completed | Scaffold Next.js, TypeScript, Tailwind, and PWA files | App shell, config files, manifest, service worker, and icon are in place. |
| Completed | Build theme system and shared UI | User-selectable luxury themes are implemented with local persistence. |
| Completed | Build requested MVP screens | Landing, pricing, onboarding, upload, questionnaire, dashboard, affiliate, and account routes are implemented. |
| Completed | Replace Stripe-first strategy | Paddle is now the primary global subscription architecture. |
| Completed | Add PayHere backup strategy | PayHere is documented as optional local/USD backup. |
| Completed | Add day-one affiliate system | One-code referral flow and simple commission tracking are documented. |
| Completed | Simplify affiliate system for MVP | Affiliate system intentionally simplified to `affiliates`, `referrals`, and `commissions`. |
| Blocked | Publish to GitHub | `gh auth status` reports an invalid `DN-UH` token, fresh `gh auth login` cannot connect to GitHub from this sandbox, and the GitHub app has no installed accounts. |

## Affiliate MVP Scope

Affiliate system intentionally simplified for MVP speed and faster time to revenue.

- Tables: `affiliates`, `referrals`, `commissions`.
- Removed for now: `referral_links`, `referral_clicks`, `referral_attributions`, `affiliate_payouts`.
- Each user has one `referral_code`.
- Referral link format: `/r/{code}`.
- Track who referred who, whether the referred user paid, and commission amount.
- Commission is 40% of subscription payment.
- Create commission only after successful payment webhook.
- Commission status flow: `pending` to `approved` to `paid`.

## Verification Completed

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- Dependency audits passed before the strategy update, and no dependency versions changed during the strategy update.
- Current audit rerun is blocked by restricted npm registry access in this turn.
