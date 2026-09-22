import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen flex items-center justify-center bg-paper px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display text-4xl font-semibold text-forest-deep mb-3">
          HAPPY GREEN
        </h1>
        <p className="text-ink/60 mb-8">
          Bangkok Lawn &amp; Garden Marketplace — เว็บแอปฉบับเต็มบน Next.js +
          Supabase
        </p>

        {user ? (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-sm text-ink/70">
              เข้าสู่ระบบด้วย{" "}
              <span className="font-semibold text-forest-deep">
                {user.email}
              </span>
            </p>
          </div>
        ) : (
          <Link
            href="/auth"
            className="inline-block px-6 py-3 rounded-xl bg-gold text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            เข้าสู่ระบบ / สมัครสมาชิก
          </Link>
        )}
      </div>
    </main>
  );
}
