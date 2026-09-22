"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Mode = "login" | "signup";

export default function AuthPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setLoading(true);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
          },
        });
        if (error) throw error;
        setNotice(
          "สมัครสมาชิกสำเร็จ — กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชีก่อนเข้าสู่ระบบ"
        );
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-paper px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-semibold text-forest-deep">
            HAPPY GREEN
          </h1>
          <p className="text-ink/60 text-sm mt-1">
            {mode === "login" ? "เข้าสู่ระบบบัญชีของคุณ" : "สมัครสมาชิกใหม่"}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex gap-2 mb-6 p-1 bg-paper-dim rounded-xl">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
                mode === "login"
                  ? "bg-forest text-white"
                  : "text-forest/70"
              }`}
            >
              เข้าสู่ระบบ
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
                mode === "signup"
                  ? "bg-forest text-white"
                  : "text-forest/70"
              }`}
            >
              สมัครสมาชิก
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {mode === "signup" && (
              <div>
                <label className="text-xs font-semibold text-ink/60">
                  ชื่อ-นามสกุล
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full mt-1 px-3 py-2 rounded-lg border border-paper-dim text-sm focus:outline-none focus:ring-2 focus:ring-grass"
                  placeholder="ชื่อ นามสกุล"
                />
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-ink/60">
                อีเมล
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-lg border border-paper-dim text-sm focus:outline-none focus:ring-2 focus:ring-grass"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-ink/60">
                รหัสผ่าน
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-lg border border-paper-dim text-sm focus:outline-none focus:ring-2 focus:ring-grass"
                placeholder="อย่างน้อย 6 ตัวอักษร"
              />
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
            {notice && (
              <p className="text-xs text-forest bg-grass-soft rounded-lg px-3 py-2">
                {notice}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading
                ? "กำลังดำเนินการ..."
                : mode === "login"
                ? "เข้าสู่ระบบ"
                : "สมัครสมาชิก"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-ink/40 mt-4">
          ขับเคลื่อนด้วย Supabase Auth
        </p>
      </div>
    </main>
  );
}
