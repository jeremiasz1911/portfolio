import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/page-shell";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { getProject, projects } from "@/content/projects";
import { pl } from "@/i18n/locales/pl";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const copy = pl.projects.items[project.id];

  return {
    title: `${copy.title} — ${copy.type} | Jeremiasz`,
    description: copy.short,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <PageShell>
      <ProjectCaseStudy project={project} />
    </PageShell>
  );
}
