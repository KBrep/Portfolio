import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import UXProjectsGrid from "@/components/portfolio/UXProjectsGrid";

export const metadata = {
  title: "UI | UX Case Studies — KB",
  description: "A collection of UI/UX case studies exploring interaction design, user experience, and interface systems.",
};

export default function UXProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="px-6 sm:px-8 pt-32 sm:pt-36 pb-16">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            Back to Work
          </Link>

          <h1 className="heading-lg mb-4">
            UI | UX
          </h1>
          <p className="body-lg max-w-2xl text-muted-foreground">
            Every tap, scroll, and pause is a moment of dialogue between a person and a system. These case studies explore the discipline of making that conversation feel effortless.
          </p>
        </div>
      </div>

      <UXProjectsGrid />
    </main>
  );
}
