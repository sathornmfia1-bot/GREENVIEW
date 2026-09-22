/**
 * Placeholder for Supabase's auto-generated database types.
 *
 * Once your schema exists in Supabase, generate the real file with:
 *
 *   npx supabase gen types typescript --project-id <your-project-ref> > types/database.types.ts
 *
 * Then use it like:
 *
 *   import { createClient } from "@/lib/supabase/client";
 *   import type { Database } from "@/types/database.types";
 *   const supabase = createClient<Database>();
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
