import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DeceptionTrackingCaseStudy from "@/components/portfolio/DeceptionTrackingCaseStudy";

export const metadata = {
  title:
    "Social Superpower of Deception Tracking in VR: Speculative UX Design | Case Study",
  description:
    "Exploring the integration of neural technology and AI to surface real-time truthfulness feedback during VR interactions through biosignal-based visual indicators.",
};

export default function DeceptionTrackingCaseStudyPage() {
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

      <DeceptionTrackingCaseStudy />
    </main>
  );
}
