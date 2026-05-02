# Affiliate System

## Goal

Style Ai should include referral and affiliate tracking from day one. Users must be able to generate referral links, share them, and earn commission from paid subscription sales.

Affiliate system intentionally simplified for MVP speed and faster time to revenue.

## Commission Model

- 40% commission on paid subscription referrals.
- Commission applies to Starter, Premium, and Elite subscription payments.
- Premium at $19.99/month is the main commission-driving plan.
- Commissions should be created only after a paid transaction is confirmed.
- Commission status flow is `pending` to `approved` to `paid`.

## Affiliate User Flow

1. User creates a Style Ai account.
2. User opens the affiliate dashboard.
3. User gets one referral code.
4. User shares `/r/{code}`.
5. New visitor signs up through that link.
6. Supabase stores who referred who.
7. If the referred user buys a subscription through Paddle, the successful payment webhook creates a commission.
8. Affiliate sees referred users, paid status, commission amount, and commission status.

## Referral Link Format

Example:

```text
https://styleai.app/r/{referralCode}
```

The short referral route should record the referring affiliate code before sending visitors to the landing page or onboarding flow.

## Database Tables

### `affiliates`

- `id`
- `user_id`
- `status`
- `display_name`
- `referral_code`
- `commission_rate`
- `created_at`

### `referrals`

- `id`
- `affiliate_id`
- `referral_code`
- `referred_user_id`
- `has_paid`
- `subscription_id`
- `payment_event_id`
- `created_at`
- `paid_at`

### `commissions`

- `id`
- `affiliate_id`
- `referral_id`
- `subscription_id`
- `payment_event_id`
- `commission_rate`
- `gross_amount`
- `commission_amount`
- `currency`
- `status`
- `earned_at`
- `paid_at`

## Fraud Controls

- Block self-referrals.
- Require paid transaction confirmation before commission.
- Allow manual approval before moving commission from `pending` to `approved`.
- Keep complex click, device, and campaign tracking for a later phase.

## MVP Requirements

- Affiliate dashboard route.
- One referral code per affiliate user.
- Referral link format: `/r/{code}`.
- Track who referred who.
- Track whether the referred user paid.
- Create commission only after successful Paddle payment webhook.
- Commission amount is 40% of subscription payment.
- Commission status states: `pending`, `approved`, `paid`.
