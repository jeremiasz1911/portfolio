"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import type { ReactNode } from "react";

import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectGridProps = {
  projects: Project[];
  /** Rendered as the final grid cell — used for the "view all" and contact tiles. */
  trailing?: ReactNode;
  className?: string;
};

export function ProjectGrid({ projects, trailing, className }: ProjectGridProps) {
  return (
    <LayoutGroup>
      <motion.div
        layout
        className={cn(
          "grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5",
          className,
        )}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} priority={index < 2} />
          ))}
        </AnimatePresence>

        {trailing}
      </motion.div>
    </LayoutGroup>
  );
}
