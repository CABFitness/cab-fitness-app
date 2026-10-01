# Development Setup

Complete guide for setting up and running CAB Fitness locally.

## Prerequisites

- Node.js 18+ and npm
- Expo CLI: `npm install -g expo-cli`
- EAS CLI: `npm install -g eas-cli`
- Git
- Supabase account (sign up at supabase.com)
- Vercel account (sign up at vercel.com)

## Initial Setup

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your credentials
3. Install dependencies: `npm install`

## Environment Variables

Create `.env.local` with:

```
SUPABASE_URL=<your_supabase_project_url>
SUPABASE_ANON_KEY=<your_supabase_anon_key>
SUPABASE_SERVICE_ROLE_KEY=<your_service_role_key>
ANTHROPIC_API_KEY=<your_api_key>
STRIPE_PUBLIC_KEY=<your_stripe_public_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
JWT_SECRET=<generate_a_random_32_char_string>
NEXT_PUBLIC_API_URL=http://localhost:3000
CALENDLY_API_KEY=<your_calendly_api_key_if_setup>
```

## Running the Apps

### Backend (Next.js API)

```bash
cd packages/backend
npm run dev
# Server runs at http://localhost:3000
```

### Client App (React Native)

```bash
cd apps/client
npm start
# Then press 'a' for Android or 'i' for iOS
```

### Coach App (React Native)

```bash
cd apps/coach
npm start
# Then press 'a' for Android or 'i' for iOS
```

## Database Setup

1. Create a Supabase project at supabase.com
2. Copy your project URL and keys to `.env.local`
3. Run migrations:
   ```bash
   supabase db push --project-ref <your-project-ref>
   ```
   Or manually run SQL from `supabase/migrations/20240914_initial_schema.sql` in Supabase dashboard

## Vercel Deployment

1. Create project on vercel.com
2. Connect GitHub repo
3. Set environment variables in Vercel dashboard
4. Deploy: automatic on push to main

## Testing

```bash
# Run all tests
npm test

# Run specific workspace tests
npm -w @cab-fitness/backend test
```

## Architecture Notes

- **Monorepo**: Uses Turbo for build optimization
- **Backend**: Next.js 14 with TypeScript
- **Mobile**: React Native with Expo Router
- **Database**: PostgreSQL via Supabase
- **Auth**: JWT tokens
- **Storage**: Supabase for user data, custom for videos

## Key Features to Build

See rollout timeline for detailed sprint breakdown.

### Sprint 1-2: Core Auth & Accounts
- User registration/login
- Role-based access control
- First check-in template

### Sprint 3: AI Integration
- Claude API integration for coach responses
- Response drafting and editing

### Sprint 4: Contracts & Messaging
- E-signature implementation
- In-app messaging

### Sprint 5-6: VIP Features
- Video upload & streaming
- Group/video areas
- Call booking integration

### Sprint 7-9: Public Launch
- Challenge tier
- Mobile app store release
- Chinese New Year campaign

## Debugging

Check logs at `packages/backend/.next` and mobile app console.

For Supabase issues, check the dashboard at supabase.com.

For Vercel, check build logs at vercel.com.

## Git Workflow

- Main branch is production
- Create feature branches from main
- Make PRs for code review before merging
- Prefix commits: `feat:`, `fix:`, `docs:`, etc.

## Common Issues

**Q: Supabase connection fails**
A: Check URL and keys in `.env.local`, ensure project is active

**Q: Expo app crashes**
A: Clear cache: `expo start -c`, reinstall pods: `cd ios && rm -rf Pods && pod install`

**Q: Build fails on Vercel**
A: Check environment variables are set, run `npm run build` locally to debug

## Contact

For questions or issues, check the rollout timeline or create a GitHub issue.
