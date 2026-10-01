# CAB Fitness Coaching Platform

Custom coaching platform replacing Everfit. Supports four tiers: Monthly subscription, Group Challenge, 1-to-1 Coaching, and VIP.

## Architecture

- **Backend**: Next.js + TypeScript (Vercel)
- **Database**: Supabase (PostgreSQL)
- **Client App**: React Native / Expo
- **Coach App**: React Native / Expo
- **AI**: Claude API for coach response drafting
- **Payments**: Stripe + in-app purchases
- **Storage**: Direct video upload + streaming

## Project Structure

```
cab-fitness-app/
├── apps/
│   ├── client/          # Client mobile app (user-facing)
│   └── coach/           # Coach mobile app (internal use)
├── packages/
│   ├── backend/         # Next.js API server
│   └── shared/          # Shared types, utils, constants
├── supabase/
│   └── migrations/      # Database schema
└── vercel.json          # Deployment config
```

## Getting Started

1. Install dependencies: `npm install`
2. Set up environment variables in `.env.local`
3. Run dev: `npm run dev`
4. Run build: `npm run build`

## Key Features

- Role-based access control (admin, coach, client)
- Bilingual interface (English + Traditional Chinese)
- Custom e-signature with audit trail
- AI-drafted coach responses
- Configurable programs, check-ins, onboarding flows
- Native in-app purchase for monthly tier
- Calendly integration for VIP calls
- Video storage and streaming
- Macro/calorie tracking

## Timeline

9 sprints from Sept 14, 2026 to Feb 6, 2027. See rollout timeline for details.
