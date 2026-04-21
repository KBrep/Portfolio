import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DevelopmentGrid from "@/components/portfolio/DevelopmentGrid";

export const metadata = {
  title: "Development — KB",
  description: "Full-stack development projects demonstrating technical precision, scalable architecture, and integration of UX principles.",
};

export default function DevelopmentPage() {
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
            DEVELOPMENT
          </h1>
          <p className="body-lg max-w-3xl text-muted-foreground">
            Development is treated as the underlying architecture that enables seamless digital experiences. This work focuses on building structured, scalable systems that support functionality, performance, and integration. Rather than being visible, its value lies in reliability and efficiency, ensuring that interfaces, content, and media operate cohesively.
          </p>
        </div>
      </div>

      <DevelopmentGrid />
    </main>
  );
}
