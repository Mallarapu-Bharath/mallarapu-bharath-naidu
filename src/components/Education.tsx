import { GraduationCap } from "lucide-react";
import { Section, Reveal } from "./Section";
import { education } from "@/data/portfolioData";

export function Education() {
  return (
    <Section id="education" label="05 / Academics" title="EDUCATION">
      <div className="relative pl-6 sm:pl-10">
        <div
          aria-hidden="true"
          className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-violet via-cyan/60 to-transparent sm:left-[15px]"
        />
        <ol className="space-y-6">
          {education.map((e, i) => (
            <li key={e.institution} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-6 top-6 grid size-4 place-items-center rounded-full border border-violet/60 bg-background sm:-left-10"
              >
                <span className="size-1.5 rounded-full bg-violet shadow-[0_0_12px_2px_var(--violet)]" />
              </span>
              <Reveal delay={i * 0.08}>
                <article className="flex flex-wrap items-start justify-between gap-4 rounded-2xl glass glass-hover p-6">
                  <div className="flex gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
                      <GraduationCap className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold">{e.institution}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{e.qualification}</p>
                    </div>
                  </div>
                  <p className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground">
                    {e.period}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
