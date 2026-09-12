"use client";

import { motion } from "framer-motion";

import { TechIcon } from "@/components/tech/tech-icon";
import type {
  ProjectArchitectureEdge,
  ProjectArchitectureNode,
} from "@/content/architecture";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectArchitectureDiagramProps = {
  nodes: ProjectArchitectureNode[];
  edges: ProjectArchitectureEdge[];
  className?: string;
};

export function ProjectArchitectureDiagram({
  nodes,
  edges,
  className,
}: ProjectArchitectureDiagramProps) {
  const ordered = orderNodes(nodes, edges);

  return (
    <ol
      className={cn(
        "flex flex-col gap-0 sm:flex-row sm:flex-wrap sm:items-stretch",
        className,
      )}
    >
      {ordered.map((node, index) => {
        const isLast = index === ordered.length - 1;

        return (
          <li key={node.id} className="flex flex-col sm:flex-row sm:items-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04, ease }}
              className="min-w-[140px] rounded-xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-3"
            >
              <div className="flex items-center gap-2.5">
                {node.tech ? (
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.05]">
                    <TechIcon technology={node.tech} size={15} />
                  </span>
                ) : null}
                <div className="min-w-0">
                  <p className="text-[13px] leading-4 text-white/85">{node.label}</p>
                  {node.role ? (
                    <p className="mt-1 text-[10.5px] tracking-wide text-white/35 uppercase">
                      {node.role}
                    </p>
                  ) : null}
                </div>
              </div>
            </motion.div>
            {!isLast ? (
              <>
                <span aria-hidden className="mx-auto my-1.5 h-4 w-px bg-white/20 sm:hidden" />
                <span aria-hidden className="mx-2 hidden h-px w-5 bg-white/20 sm:block" />
              </>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

function orderNodes(
  nodes: ProjectArchitectureNode[],
  edges: ProjectArchitectureEdge[],
): ProjectArchitectureNode[] {
  if (edges.length === 0) return nodes;

  const byId = new Map(nodes.map((node) => [node.id, node]));
  const targets = new Set(edges.map((edge) => edge.to));
  const roots = nodes.filter((node) => !targets.has(node.id));
  const start = roots[0] ?? nodes[0];

  const seen = new Set<string>();
  const ordered: ProjectArchitectureNode[] = [];
  const queue = [start.id];

  while (queue.length > 0) {
    const id = queue.shift()!;
    if (seen.has(id)) continue;
    seen.add(id);
    const node = byId.get(id);
    if (node) ordered.push(node);
    edges.filter((edge) => edge.from === id).forEach((edge) => queue.push(edge.to));
  }

  nodes.forEach((node) => {
    if (!seen.has(node.id)) ordered.push(node);
  });

  return ordered;
}
