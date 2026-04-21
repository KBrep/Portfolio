import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DashboardClient from "@/components/dashboard/DashboardClient";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");

  const userId = (session.user as { id: string }).id;
  const projects = await prisma.project.findMany({
    where: { userId },
    orderBy: { order: "asc" },
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b px-6 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity">
          DS.
        </Link>
        <div className="flex items-center gap-6">
          <p className="text-xs text-muted-foreground">{session.user.email}</p>
          <DashboardClient />
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Manage your portfolio projects and case studies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="border rounded-sm p-6">
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Total Projects
            </p>
            <p className="text-3xl font-bold">{projects.length}</p>
          </div>
          <div className="border rounded-sm p-6">
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Categories
            </p>
            <p className="text-3xl font-bold">
              {new Set(projects.map((p: { category: string }) => p.category)).size}
            </p>
          </div>
          <div className="border rounded-sm p-6">
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Portfolio Status
            </p>
            <p className="text-3xl font-bold text-green-600">Live</p>
          </div>
        </div>

        {/* Projects list */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold tracking-tight mb-4">Projects</h2>
        </div>

        <div className="divide-y">
          {projects.map((project: { id: string; slug: string; title: string; category: string; year: string }) => (
            <div key={project.id} className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium">{project.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {project.category} · {project.year}
                </p>
              </div>
              <Link
                href={`/work/${project.slug}`}
                className="text-xs font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                View →
              </Link>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm text-muted-foreground">No projects yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
