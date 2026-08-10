import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, ShieldCheck, Video } from "lucide-react";
import { Section, Reveal } from "./Section";
import { projects, type Project } from "@/data/portfolioData";
import { ProjectDetails } from "./ProjectDetails";

const visuals = [Bot, ShieldCheck, Video];

function TiltCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const Icon = visuals[index % visuals.length] ?? Bot;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <Reveal delay={index * 0.1} className="h-full">
      <motion.article
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setTilt({
            x: ((e.clientY - r.top) / r.height - 0.5) * -6,
            y: ((e.clientX - r.left) / r.width - 0.5) * 6,
          });
        }}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ transformPerspective: 900 }}
        className="flex h-full flex-col overflow-hidden rounded-2xl glass glass-hover"
      >
        <div
          aria-hidden="true"
          className="relative grid h-36 place-items-center border-b border-border/70 bg-[radial-gradient(circle_at_50%_120%,color-mix(in_oklab,var(--cyan)_22%,transparent),transparent_70%)]"
        >
          <div className="absolute inset-0 grid-bg opacity-60" />
          <Icon className="relative size-12 text-cyan" strokeWidth={1.2} />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="font-mono text-[0.7rem] tracking-[0.22em] text-violet">
            PROJECT {project.number}
          </span>
          <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.1em] text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onOpen}
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan/40 bg-cyan/10 px-4 py-3 text-sm font-medium text-cyan transition-colors hover:bg-cyan/20"
          >
            EXPLORE PROJECT
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </button>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      label="04 / Work"
      title="PROJECTS"
      intro="Hardware and IoT projects built during my engineering studies."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <TiltCard key={p.slug} project={p} index={i} onOpen={() => setActive(p)} />
        ))}
      </div>
      <ProjectDetails project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
