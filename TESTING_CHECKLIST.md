# Testing Checklist

## Local Checks

- [x] Install dependencies.
- [x] Run TypeScript check.
- [x] Run linting.
- [x] Start the local app.
- [x] Visit each route.

## Route Coverage

- [x] `/`
- [x] `/pricing`
- [x] `/onboarding`
- [x] `/onboarding/photo-upload`
- [x] `/onboarding/questionnaire`
- [x] `/dashboard`
- [x] `/affiliate`
- [x] `/account`

## UI And UX

- [ ] Mobile navigation is usable.
- [ ] Desktop navigation is usable.
- [ ] Theme selector works.
- [ ] Theme preference persists after refresh.
- [ ] Text remains readable across themes.
- [ ] Focus states are visible.
- [ ] CTA links go to expected routes.
- [ ] Upload placeholder communicates mock state.
- [ ] Questionnaire placeholder has selectable controls.
- [ ] Dashboard surfaces are visually coherent.

## PWA

- [x] Manifest is available.
- [x] App has mobile theme color metadata.
- [x] Service worker registers in production-capable browsers.
- [ ] Offline fallback behavior is documented before expansion.

## Integration Readiness

- [x] Supabase env placeholders are documented.
- [x] Paddle env placeholders are documented.
- [x] PayHere backup env placeholders are documented.
- [x] No paid API calls are made.
- [x] No secrets are committed.
