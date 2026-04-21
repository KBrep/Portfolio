"use client";

import { signOut } from "next-auth/react";

export default function DashboardClient() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-xs font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
    >
      Sign out
    </button>
  );
}
