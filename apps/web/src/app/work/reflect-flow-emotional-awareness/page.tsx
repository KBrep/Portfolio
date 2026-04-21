import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReflectFlowCaseStudy from "@/components/portfolio/ReflectFlowCaseStudy";

export const metadata = {
  title: "Reflect Flow: Emotional Awareness in Impulsive Digital Choices | Case Study",
  description:
    "A speculative UX research project exploring whether emotional self-awareness, surfaced through interaction cues, can reshape impulsive digital behaviour in e-commerce and social media.",
};

export default function ReflectFlowCaseStudyPage() {
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

      <ReflectFlowCaseStudy />
    </main>
  );
}
