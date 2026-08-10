import { Briefcase } from "lucide-react";
import { Section, Reveal } from "./Section";
import { experience } from "@/data/portfolioData";

export function Experience() {
  return (
    <Section id="experience" label="03 / Internships" title="EXPERIENCE">
      <div className="relative pl-6 sm:pl-10">
        <div
          aria-hidden="true"
          className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan via-violet/60 to-transparent sm:left-[15px]"
        />
        <ol className="space-y-8">
          {experience.map((exp, i) => (
            <li key={exp.company} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-6 top-6 grid size-4 place-items-center rounded-full border border-cyan/60 bg-background sm:-left-10"
              >
                <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_12px_2px_var(--cyan)]" />
              </span>
              <Reveal delay={i * 0.08}>
                <article className="rounded-2xl glass glass-hover p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg border border-violet/30 bg-violet/10 text-violet">
                      <Briefcase className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{exp.company}</h3>
                      <p className="font-mono text-[0.7rem] tracking-[0.18em] text-cyan">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan/70"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-cyan/25 bg-cyan/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.1em] text-cyan"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
