# Architecture

## Strategy

Style Ai launches first as a mobile-friendly Next.js PWA/web app. This avoids App Store and Play Store commissions during the first revenue phase, keeps iteration fast for a non-technical founder, and preserves the option to wrap the web app into iOS and Android apps later.

Stripe is not part of the launch architecture because it is not available for the founder in Sri Lanka. The payment architecture is Paddle-first for global subscriptions, with PayHere as an optional later Sri Lanka/local and USD backup.

## Stack

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS with CSS variables for themes
- PWA: Web app manifest and client-side service worker registration
- Auth, database, and storage: Supabase
- Global subscriptions: Paddle
- Optional local/backup payments: PayHere
- AI analysis: OpenAI API
- Reports: server-side PDF generation
- Data now: typed mock data until integrations are approved

## Directory Plan

```text
app/
  layout.tsx                 Global metadata, PWA setup, providers
  page.tsx                   Landing page
  pricing/page.tsx           Paddle-first pricing page
  onboarding/page.tsx        Onboarding start
  onboarding/photo-upload/   Photo upload placeholder
  onboarding/questionnaire/  Questionnaire placeholder
  dashboard/page.tsx         AI result dashboard placeholder
  affiliate/page.tsx         Affiliate dashboard placeholder
  account/page.tsx           Account/settings placeholder
components/
  app-shell.tsx              Header, mobile navigation, page frame
  theme-provider.tsx         User-selectable theme state
  theme-selector.tsx         Theme control
  ui/                        Shared UI primitives
lib/
  mock-data.ts               Typed sample data
  routes.ts                  Navigation route definitions
  themes.ts                  Theme tokens and IDs
  supabase/                  Supabase-ready client/server placeholders
  paddle/                    Paddle-ready subscription placeholders
public/
  manifest.webmanifest       PWA metadata
  sw.js                      Minimal offline shell service worker
```

## Pricing And Entitlements

| Plan | Price | Entitlement Direction |
| --- | ---: | --- |
| Free basic scan | $0 | One limited scan for acquisition and trust. |
| Starter | $9.99/month | Basic scan history and limited recommendations. |
| Premium | $19.99/month | Main plan with deeper analysis, brand book generation, and saved reports. |
| Elite | $49.99/month | Higher usage, priority features, and future concierge workflows. |

## Supabase Architecture

Supabase should own:

- authentication
- user profiles
- secure style photo storage
- questionnaire responses
- AI analysis records
- generated brand books
- PDF report metadata
- subscription status
- Paddle and PayHere payment events
- affiliate tracking and commission records

Core tables:

- `profiles`
- `style_photos`
- `style_questionnaire_responses`
- `style_analyses`
- `brand_books`
- `pdf_reports`
- `plans`
- `subscriptions`
- `payment_events`
- `entitlements`
- `affiliates`
- `referrals`
- `commissions`

## Paddle Architecture

Paddle should be the primary global subscription provider.

Responsibilities:

- hosted checkout
- subscription lifecycle
- payment method handling
- tax/VAT handling through merchant-of-record model
- invoices and receipts
- webhooks into Supabase

The app should never trust client-side payment state. Paddle webhooks must update Supabase, and the app should read entitlements from Supabase.

## PayHere Architecture

PayHere is optional and should be added after Paddle is working.

Use cases:

- Sri Lanka/local payment support
- local campaigns
- backup USD payment option

PayHere events should normalize into the same `payment_events`, `subscriptions`, and `entitlements` model used by Paddle.

## OpenAI And PDF Architecture

OpenAI API should be called only from server-side routes or server actions.

Future AI responsibilities:

- image/style scan
- style profile generation
- wardrobe recommendations
- brand book generation
- affiliate-safe product recommendation summaries

PDF generation should happen server-side so users can download brand books and style reports without exposing generation logic or API keys in the browser.

## Affiliate Architecture

Affiliate tracking is a day-one system, not a later add-on.

Affiliate system intentionally simplified for MVP speed and faster time to revenue.

Users should be able to:

- use one personal referral code
- share `/r/{code}` as their referral link
- see referred users and paid conversions
- earn 40% commission on paid subscription referrals
- track pending, approved, and paid commissions

MVP affiliate tables:

- `affiliates`: one row per affiliate user, including `user_id`, `referral_code`, `status`, and `commission_rate`.
- `referrals`: one row per referred user, including `affiliate_id`, `referred_user_id`, `referral_code`, `has_paid`, and payment/subscription references when available.
- `commissions`: one row per earned commission, including `affiliate_id`, `referral_id`, `subscription_id`, `payment_event_id`, `gross_amount`, `commission_amount`, and `status`.

MVP referral logic:

1. Each affiliate user has one `referral_code`.
2. Referral link format is `/r/{code}`.
3. The app tracks who referred who.
4. The app tracks whether the referred user paid.
5. Paddle successful payment webhooks create commissions.
6. Commission amount is 40% of the subscription payment.
7. Commission status moves from `pending` to `approved` to `paid`.

Future scalability is preserved by keeping referral and commission records normalized, but complex tracking tables such as `referral_links`, `referral_clicks`, `referral_attributions`, and `affiliate_payouts` are intentionally deferred.

## Theme System

Themes are powered by CSS variables on the document root. Components consume semantic tokens such as `--background`, `--surface`, `--foreground`, `--accent`, and `--accent-contrast`, not hardcoded brand colors.

Initial themes:

- `noir`: black/gold luxury default.
- `atelier`: ivory, ink, and rose editorial.
- `chrome`: cool graphite and electric blue for a modern tech-luxury style.

## PWA Readiness

The app includes:

- `manifest.webmanifest`
- mobile viewport metadata
- theme color metadata
- service worker registration component
- minimal `public/sw.js`

The service worker is intentionally conservative and should be expanded after auth, subscription, and offline requirements are defined.

## Production Notes

- Keep secrets in environment variables only.
- Prefer server components for static and data-read surfaces.
- Use client components only where local state or browser APIs are needed.
- Keep payment, AI, and PDF generation behind explicit server-side boundaries.
- Design founder admin tools for a non-technical operator.
