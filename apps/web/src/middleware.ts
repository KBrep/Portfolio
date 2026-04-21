export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    /*
     * Match only /dashboard and /admin routes.
     * All portfolio pages are public:
     * - / (landing page)
     * - /work/* (case studies)
     * - /login, /register
     * - /forgot-password, /reset-password
     * - /api (API routes handle their own auth)
     * - /_next (Next.js internals)
     * - /favicon.ico, /public assets
     */
    "/(dashboard|admin)(.*)",
  ],
};
