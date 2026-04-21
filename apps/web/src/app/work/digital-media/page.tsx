import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DigitalMediaGrid from "@/components/portfolio/DigitalMediaGrid";

export const metadata = {
  title: "Digital Media — KB",
  description: "Integrated digital media campaigns that balance creative direction with data-informed strategy across platforms.",
};

export default function DigitalMediaPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="px-6 sm:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            Back to Work
          </Link>

          <h1 className="heading-lg mb-4">
            DIGITAL MEDIA
          </h1>
          <p className="body-lg max-w-3xl text-muted-foreground">
            Digital media is approached as a system of communication rather than isolated outputs. It integrates content, distribution, and audience behaviour into a cohesive structure. The emphasis is on how messages move, adapt, and perform across platforms, balancing creative direction with data-informed decisions.
          </p>
        </div>
      </div>

      <DigitalMediaGrid />
    </main>
  );
}
