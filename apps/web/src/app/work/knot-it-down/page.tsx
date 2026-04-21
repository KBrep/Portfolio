import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import KnotItDownCaseStudy from "@/components/portfolio/KnotItDownCaseStudy";

export const metadata = {
  title: "Knot it Down: Embodied Learning Through Tactile Timelines | Case Study",
  description:
    "Redefining history education through immersive environments that let you play with time. A speculative UX design project translating abstract historical timelines into embodied, tactile experiences.",
};

export default function KnotItDownCaseStudyPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="px-6 sm:px-8 pt-8">
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

      <KnotItDownCaseStudy />
    </main>
  );
}
