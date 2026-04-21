import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PsychologyGrid from "@/components/portfolio/PsychologyGrid";

export const metadata = {
  title: "Psychology — KB",
  description: "Behavioral psychology principles applied to digital design, content strategy, and user experience optimization.",
};

export default function PsychologyPage() {
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
            PSYCHOLOGY
          </h1>
          <p className="body-lg max-w-3xl text-muted-foreground">
            The digital space does not simply respond to behaviour, it shapes it. Psychology here is the practice of understanding what drives people beneath the surface: their instincts, their patterns, their unspoken expectations. In a world where attention is currency and choice is constant, this work exists to bridge the distance between human nature and digital reality.
          </p>
        </div>
      </div>

      <PsychologyGrid />
    </main>
  );
}
