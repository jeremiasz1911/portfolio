import { TechBadge } from "@/components/tech/tech-badge";
import {
  resolveTech,
  techCategoryOrder,
  type TechId,
} from "@/content/technologies";
import { cn } from "@/lib/utils";

type TechGroupedStackProps = {
  technologies: Array<TechId | string>;
  groupLabels: Record<string, string>;
  className?: string;
};

/** Case-study stack: brand icons grouped by responsibility. */
export function TechGroupedStack({
  technologies,
  groupLabels,
  className,
}: TechGroupedStackProps) {
  const groups = new Map<string, Array<TechId | string>>();

  technologies.forEach((entry) => {
    const tech = resolveTech(entry);
    const category = tech?.category ?? "other";
    const list = groups.get(category) ?? [];
    list.push(entry);
    groups.set(category, list);
  });

  const ordered = [
    ...techCategoryOrder.filter((category) => groups.has(category)),
    ...(groups.has("other") ? ["other"] : []),
  ];

  return (
    <div className={cn("space-y-8", className)}>
      {ordered.map((category) => {
        const items = groups.get(category) ?? [];
        const title = groupLabels[category] ?? category;

        return (
          <div key={category}>
            <p className="t-eyebrow text-white/30">{title}</p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {items.map((entry) => (
                <li key={`${category}-${entry}`}>
                  <TechBadge
                    technology={entry}
                    size="lg"
                    className="w-full justify-start !rounded-2xl !px-4 !py-3.5"
                  />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
