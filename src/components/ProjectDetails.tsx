import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, FileText, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolioData";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="section-label">{title}</h4>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function ProjectDetails({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const docs = project?.docs.filter((d) => d.available) ?? [];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-4 w-full max-w-3xl rounded-2xl glass p-6 sm:p-9"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-lg border border-border bg-surface-2/70 text-muted-foreground transition-colors hover:text-cyan"
            >
              <X className="size-4" />
            </button>

            <span className="font-mono text-[0.7rem] tracking-[0.22em] text-violet">
              PROJECT {project.number}
            </span>
            <h3 className="mt-3 pr-12 font-display text-2xl font-semibold leading-tight">
              {project.title}
            </h3>

            <div className="mt-7 space-y-6">
              <Block title="Overview">{project.overview}</Block>
              {project.problem ? <Block title="Problem">{project.problem}</Block> : null}
              {project.solution ? <Block title="Solution">{project.solution}</Block> : null}
              {project.contribution ? (
                <Block title="My Contribution">{project.contribution}</Block>
              ) : null}

              <Block title="Technologies">
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-cyan/25 bg-cyan/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.1em] text-cyan"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Features">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan/70" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Architecture">
                {project.architecture ?? (
                  <span className="italic">
                    Architecture diagram not added yet — drop an image at{" "}
                    <code className="font-mono text-xs text-cyan">
                      public/projects/{project.slug}/architecture.png
                    </code>{" "}
                    and reference it in <code className="font-mono text-xs text-cyan">portfolioData.ts</code>.
                  </span>
                )}
              </Block>

              <Block title="Project Images">
                {project.images.length ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.images.map((img) => (
                      <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full rounded-xl border border-border object-cover"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid h-32 place-items-center rounded-xl border border-dashed border-border bg-surface-2/40 text-xs italic">
                    No project images added yet.
                  </div>
                )}
              </Block>

              <Block title="Documents">
                {docs.length || project.github || project.liveDemo ? (
                  <div className="flex flex-wrap gap-3">
                    {docs.map((d) => (
                      <a
                        key={d.path}
                        href={d.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-4 py-2.5 text-sm text-cyan transition-colors hover:bg-cyan/20"
                      >
                        <FileText className="size-4" aria-hidden="true" /> {d.label}
                      </a>
                    ))}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/70 px-4 py-2.5 text-sm transition-colors hover:border-cyan/40 hover:text-cyan"
                      >
                        <Github className="size-4" aria-hidden="true" /> GitHub
                      </a>
                    ) : null}
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/70 px-4 py-2.5 text-sm transition-colors hover:border-cyan/40 hover:text-cyan"
                      >
                        <ExternalLink className="size-4" aria-hidden="true" /> Live Demo
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <span className="italic">
                    No documents linked yet. Add files under{" "}
                    <code className="font-mono text-xs text-cyan">public/projects/{project.slug}/</code>{" "}
                    and set <code className="font-mono text-xs text-cyan">available: true</code> in{" "}
                    <code className="font-mono text-xs text-cyan">portfolioData.ts</code>.
                  </span>
                )}
              </Block>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
