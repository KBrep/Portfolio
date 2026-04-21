"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [validating, setValidating] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    if (!token) { setValidating(false); return; }
    fetch(`/api/verify-reset-token?token=${token}`)
      .then((res) => res.json())
      .then((data: { valid: boolean }) => { setTokenValid(data.valid); setValidating(false); })
      .catch(() => { setValidating(false); });
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) { setError("Passwords do not match"); return; }
    if (password.length < 8) { setError("Password must be at least 8 characters"); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Something went wrong"); return; }
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (validating) {
    return <p className="text-sm text-muted-foreground">Validating reset link...</p>;
  }

  if (!token || !tokenValid) {
    return (
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Invalid or expired link</h2>
        <p className="text-sm text-muted-foreground mb-6">
          This password reset link is invalid or has expired.
        </p>
        <Link href="/forgot-password" className="text-sm font-medium underline underline-offset-4">
          Request a new link
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Password reset!</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Your password has been updated successfully.
        </p>
        <Link href="/login" className="text-sm font-medium underline underline-offset-4">
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight mb-1">Set new password</h2>
      <p className="text-sm text-muted-foreground mb-8">Enter your new password below.</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-3 text-sm text-destructive bg-destructive/10 rounded">{error}</div>
        )}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-xs font-medium tracking-wider uppercase">New Password</Label>
          <Input id="password" type="password" placeholder="At least 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" className="h-11 rounded-sm" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-xs font-medium tracking-wider uppercase">Confirm Password</Label>
          <Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required autoComplete="new-password" className="h-11 rounded-sm" />
        </div>
        <Button type="submit" className="w-full h-11 rounded-sm font-medium tracking-wider uppercase text-xs" disabled={loading}>
          {loading ? "Resetting..." : "Reset password"}
        </Button>
      </form>
    </>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <Link href="/" className="text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity">
            DS.
          </Link>
        </div>
        <Suspense fallback={<p className="text-sm text-muted-foreground">Loading...</p>}>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
