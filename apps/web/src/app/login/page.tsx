"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fillDemo = () => {
    setEmail("demo@example.com");
    setPassword("demo1234");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-foreground text-background items-center justify-center p-16">
        <div className="max-w-md">
          <p className="text-xs font-medium tracking-[0.3em] uppercase opacity-50 mb-8">
            Admin Access
          </p>
          <h1 className="text-4xl font-bold tracking-tight leading-[1.1] mb-6">
            Manage your portfolio with clarity and control.
          </h1>
          <p className="text-sm opacity-60 leading-relaxed">
            Access the dashboard to manage projects, update case studies,
            and maintain your professional presence.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-8">
        <div className="w-full max-w-sm">
          <div className="mb-10">
            <Link
              href="/"
              className="text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity"
            >
              DS.
            </Link>
          </div>

          <h2 className="text-2xl font-bold tracking-tight mb-1">Sign in</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Enter your credentials to access the dashboard.
          </p>

          {/* Demo credentials */}
          <div className="mb-6 p-4 border rounded bg-secondary/50">
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Demo Account
            </p>
            <p className="text-sm font-mono">demo@example.com / demo1234</p>
            <button
              type="button"
              onClick={fillDemo}
              className="mt-2 text-xs font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              Fill credentials
            </button>
          </div>

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
                className="h-11 rounded-sm border-border"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xs font-medium tracking-wider uppercase">
                  Password
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="h-11 rounded-sm border-border"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 rounded-sm font-medium tracking-wider uppercase text-xs"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <p className="mt-8 text-sm text-muted-foreground text-center">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-medium text-foreground hover:opacity-70 transition-opacity">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
