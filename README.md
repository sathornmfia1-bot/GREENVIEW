# HAPPY GREEN — Next.js + Supabase

Bangkok Lawn & Garden Marketplace, migrated from a static HTML mockup into a
full-stack Next.js (App Router) app backed by Supabase.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Supabase** (`@supabase/supabase-js` + `@supabase/ssr` for cookie-based
  auth across Server/Client Components and middleware)
- **Tailwind CSS**, using the original HAPPY GREEN color palette
  (`forest`, `grass`, `gold`, `ink`, `paper` — see `tailwind.config.ts`)

## Folder structure

```
app/
  layout.tsx          root layout, fonts, metadata
  page.tsx             home page (Server Component, reads Supabase session)
  auth/page.tsx         login / signup page (Client Component)
  api/health/route.ts   sample backend Route Handler — add more here
lib/supabase/
  client.ts             Supabase client for Client Components
  server.ts             Supabase client for Server Components / Route Handlers
  middleware.ts          session-refresh helper used by middleware.ts
middleware.ts            wires the session-refresh helper into every request
types/database.types.ts  placeholder for Supabase-generated DB types
components/               shared UI components
```

## Setup

1. **Install dependencies** (requires internet access):
   ```bash
   npm install
   ```
2. **Create a Supabase project** at [supabase.com](https://supabase.com) (free tier is fine).
3. **Copy the env file** and fill in your project's keys (Supabase dashboard → Settings → API):
   ```bash
   cp .env.local.example .env.local
   ```
4. **Enable Email/Password auth** in Supabase: Authentication → Providers → Email (on by default).
5. **Run locally**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`, click "เข้าสู่ระบบ / สมัครสมาชิก" to test signup/login against your Supabase project.
6. **Build for production**:
   ```bash
   npm run build
   ```

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel — Framework Preset auto-detects **Next.js**, no config needed.
3. Add the two environment variables from `.env.local.example` in Vercel → Project → Settings → Environment Variables.
4. Deploy.

## ⚠️ About `npm run build` verification

This project was generated in a sandboxed environment **with no access to the
npm registry**, so `npm install` / `npm run build` could not be run live here
to prove the build passes — unlike the static HTML version, where a build
step could be simulated with plain `echo`, an actual Next.js build requires
downloading `next`, `react`, and other real packages, which isn't possible
without network access.

The code follows current (as of mid-2026) Next.js App Router and
`@supabase/ssr` conventions and should build cleanly with `npm install &&
npm run build` on a machine with internet access, or automatically on
Vercel. **Please run `npm install && npm run build` yourself once** (locally
or by pushing to a Vercel-connected repo) to confirm — if anything errors,
paste the output back and it can be fixed immediately.

## Next steps (not yet migrated)

Only one example auth page was built, per the request. The rest of the
original mockup (customer booking flow, mechanic dashboard, admin panel,
price-adjustment flow, etc.) still needs to be ported from
`lawn-marketplace-mockup.html` into this structure, along with the matching
Supabase tables (`bookings`, `providers`, `transactions`, etc.) and Row Level
Security policies. Happy to do that next, screen by screen.
