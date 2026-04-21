import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContentWritingGrid from "@/components/portfolio/ContentWritingGrid";

export const metadata = {
  title: "Content Writing — KB",
  description: "Strategic content that blends behavioral psychology with digital communication to inform, persuade, and engage audiences effectively.",
};

export default function ContentWritingPage() {
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
            CONTENT WRITING
          </h1>
          <p className="body-lg max-w-3xl text-muted-foreground">
            Content is not simply written, it is constructed with intent. This work reflects a structured approach to communication, where language is shaped through behavioural understanding and contextual relevance. The focus lies in translating complex ideas into clear, purposeful narratives that align with both user needs and strategic objectives.
          </p>
        </div>
      </div>

      <ContentWritingGrid />
    </main>
  );
}
