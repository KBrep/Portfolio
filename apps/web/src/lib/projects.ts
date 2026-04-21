import { prisma } from "@/lib/prisma";

export async function getProjects() {
  return prisma.project.findMany({
    orderBy: { order: "asc" },
  });
}

export async function getProjectBySlug(slug: string) {
  return prisma.project.findUnique({
    where: { slug },
  });
}
