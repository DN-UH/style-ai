# Payments Strategy

## Founder Constraints

- The founder is non-technical, so payments must be operationally simple.
- The first launch must be a mobile-friendly PWA/web app to avoid App Store and Play Store commissions.
- iOS and Android apps can be wrapped later after web revenue is validated.
- Stripe is not available for the founder in Sri Lanka.
- Payments must support global customers and recurring subscriptions.
- Affiliate/referral commissions must work from day one.

## Payment Direction

Style Ai should use Paddle as the primary global subscription platform. Paddle is preferred because it acts as a merchant of record, supports global subscription billing, and reduces tax and compliance complexity for a non-technical founder.

PayHere should be kept as an optional later payment path for Sri Lanka/local customers and as a USD backup where it makes business sense. PayHere should not block the global MVP.

## Pricing Model

| Plan | Price | Purpose |
| --- | ---: | --- |
| Free basic scan | $0 | Lead generation and trust-building scan. |
| Starter | $9.99/month | Low-friction paid entry plan. |
| Premium | $19.99/month | Main plan and primary conversion target. |
| Elite | $49.99/month | High-value power-user and concierge-style tier. |

Affiliate commission is 40% of paid subscription referrals for the MVP.

## Paddle-First Flow

1. User creates an account in the PWA.
2. User completes a free basic scan.
3. User chooses Starter, Premium, or Elite.
4. Next.js creates a Paddle checkout session from a server-side route.
5. Paddle handles payment, tax, receipts, and subscription lifecycle events.
6. Paddle webhooks update Supabase subscription records.
7. Supabase entitlements unlock paid AI scans, brand books, saved reports, and referral commissions.

## PayHere Backup Flow

PayHere should be added only after the Paddle flow is stable.

Use PayHere for:

- Sri Lanka/local customers.
- Special local promotions.
- USD backup checkout if Paddle coverage becomes a blocker.

PayHere events should write into the same `subscriptions`, `payment_events`, and `affiliate_commissions` tables so the product does not split entitlement logic.

## Required Payment Tables

- `plans`
- `subscriptions`
- `payment_events`
- `entitlements`
- `affiliates`
- `referrals`
- `commissions`

## Webhook Requirements

Paddle webhooks should handle:

- checkout completed
- subscription activated
- subscription updated
- subscription canceled
- transaction paid
- transaction refunded
- payment failed

PayHere webhooks should be normalized into the same internal event shape when added later.

## Blockers

- Paddle account approval and product configuration.
- PayHere merchant setup, if local payments are needed.
- Legal terms for refunds, subscriptions, image uploads, and affiliate commissions.
- Manual commission approval and paid-status process.
- Tax/accounting review for Sri Lanka-based operations.

## Non-Technical Operations

The founder should eventually have simple admin screens for:

- viewing active subscriptions
- seeing failed payments
- approving affiliate accounts
- reviewing commission balances
- reviewing approved and paid commissions
- sending support links to customers
