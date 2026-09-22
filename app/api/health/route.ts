import { NextResponse } from "next/server";

/**
 * Sample Route Handler — proves the backend (app/api/**) is wired up.
 * GET /api/health -> { status: "ok" }
 *
 * Add real endpoints alongside this one, e.g. app/api/bookings/route.ts,
 * each querying Supabase via lib/supabase/server.ts.
 */
export async function GET() {
  return NextResponse.json({ status: "ok", service: "happy-green" });
}
