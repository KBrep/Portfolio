"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <Link href="/" className="text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity">
            DS.
          </Link>
        </div>

        {submitted ? (
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-2">Check your email</h2>
            <p className="text-sm text-muted-foreground mb-6">
              If an account exists for {email}, we&apos;ve sent a password reset link.
              The link will expire in 1 hour.
            </p>
            <Link href="/login" className="text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity">
              Back to sign in
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold tracking-tight mb-1">Forgot password?</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Enter your email and we&apos;ll send you a reset link.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-3 text-sm text-destructive bg-destructive/10 rounded">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-medium tracking-wider uppercase">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="h-11 rounded-sm"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 rounded-sm font-medium tracking-wider uppercase text-xs"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send reset link"}
              </Button>
            </form>

            <p className="mt-6 text-sm text-muted-foreground text-center">
              <Link href="/login" className="font-medium text-foreground hover:opacity-70 transition-opacity">
                Back to sign in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
