import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SenseCaseStudy from "@/components/portfolio/SenseCaseStudy";

export const metadata = {
  title: "SENSE: Bio-HCI Wearable Ultrasound Scanner | Case Study",
  description:
    "Rethinking kidney stone monitoring through wearable, AI-enabled design. A speculative Bio-HCI project exploring the intersection of healthcare, wearable technology, and human-computer interaction.",
};

export default function SenseCaseStudyPage() {
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

      <SenseCaseStudy />
    </main>
  );
}
