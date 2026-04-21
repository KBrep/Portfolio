import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import WanderomaCaseStudy from "@/components/portfolio/WanderomaCaseStudy";

export const metadata = {
  title: "Wanderoma: Cultural Storytelling for Travellers | Case Study",
  description:
    "A speculative cultural storytelling app designed to bridge the gap between visiting a place and understanding it. Exploring participatory design, emotional depth, and meaningful travel experiences.",
};

export default function WanderomaCaseStudyPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="px-6 sm:px-8 pt-24 sm:pt-28">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/work/ux-projects"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            Back to UI | UX
          </Link>
        </div>
      </div>

      <WanderomaCaseStudy />
    </main>
  );
}
