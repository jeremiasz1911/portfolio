import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { ProjectsCatalog } from "@/components/projects/projects-catalog";
import { pl } from "@/i18n/locales/pl";

export const metadata: Metadata = {
  title: `${pl.projects.catalog.title} | Jeremiasz`,
  description: pl.projects.catalog.subtitle,
};

export default async function ProjectsPage({
  searchParams,
}: PageProps<"/projects">) {
  const params = await searchParams;
  const tech = typeof params.tech === "string" ? params.tech : undefined;

  return (
    <PageShell wide>
      <ProjectsCatalog initialTech={tech} />
    </PageShell>
  );
}
