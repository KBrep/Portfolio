import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ChatGPTInterfaceCaseStudy from "@/components/portfolio/ChatGPTInterfaceCaseStudy";

export const metadata = {
  title:
    "Multi-User ChatGPT Interface: Speculative UX Design | Case Study",
  description:
    "Reimagining ChatGPT as a dynamic multi-user interface enabling real-time AI facilitation, emotional awareness, and adaptive communication across collaborative teams and multilingual groups.",
};

export default function ChatGPTInterfaceCaseStudyPage() {
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

      <ChatGPTInterfaceCaseStudy />
    </main>
  );
}
