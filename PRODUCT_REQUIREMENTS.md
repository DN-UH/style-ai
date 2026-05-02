# Product Requirements

## Product Name

Style Ai

## Primary Jobs

- Help users begin a luxury style consultation.
- Collect styling inputs through photos and questionnaire answers.
- Show a high-quality mock AI styling result.
- Present paid plan options without creating a live checkout.
- Provide account and visual theme settings.
- Provide affiliate performance visibility with mock data.

## MVP Pages

| Page | Route | Requirement |
| --- | --- | --- |
| Landing page | `/` | Premium hero, product promise, journey preview, theme selector, and conversion CTA. |
| Pricing page | `/pricing` | Free, Starter, Premium, and Elite plan cards with Paddle-first subscription messaging. |
| Onboarding start | `/onboarding` | Clear starting point for the style intake flow. |
| Photo upload placeholder | `/onboarding/photo-upload` | Upload UI placeholder with privacy reassurance and mock file state. |
| Style questionnaire placeholder | `/onboarding/questionnaire` | Form-like placeholder with selectable style preferences. |
| AI result dashboard placeholder | `/dashboard` | Mock style profile, recommendations, outfit capsules, and next actions. |
| Affiliate dashboard placeholder | `/affiliate` | Mock affiliate metrics, partner links, and commission table. |
| Account/settings placeholder | `/account` | Profile, subscription placeholder, notification settings, and visual theme selector. |

## Functional Requirements

- Users can switch among supported visual themes in the browser.
- Theme selection persists locally.
- Navigation works across all MVP routes.
- CTAs route to the next sensible placeholder screen.
- Mock data is centralized and typed.
- Users can understand affiliate/referral earning potential from the MVP affiliate surface.
- PWA manifest is present with mobile app metadata.
- Service worker registration is prepared for offline shell behavior.
- Supabase, Paddle, PayHere, and affiliate readiness are represented through typed placeholders and env examples.

## Non-Functional Requirements

- Mobile-first responsive layout.
- Accessible semantic HTML and visible focus states.
- No paid API calls.
- No hardcoded secrets.
- Components should be reusable and typed.
- Clear project documentation must be maintained.

## Out Of Scope For MVP

- Real AI image analysis or generated styling.
- Live Supabase authentication, storage, or database writes.
- Live Paddle checkout, PayHere checkout, billing portal, or webhooks.
- Production affiliate tracking.
- Native mobile app builds.
