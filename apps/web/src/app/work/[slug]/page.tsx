import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug } from "@/lib/projects";
import CaseStudyContent from "@/components/portfolio/CaseStudyContent";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const project = await getProjectBySlug(params.slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.title} — Case Study`,
      description: project.description,
    };
  } catch {
    return { title: "Case Study" };
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="px-6 sm:px-8 pt-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Work
          </Link>
        </div>
      </div>
      <CaseStudyContent project={project} />
    </main>
  );
}
