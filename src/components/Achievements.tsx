import { Trophy } from "lucide-react";
import { Section, Reveal } from "./Section";
import { achievements } from "@/data/portfolioData";

export function Achievements() {
  return (
    <Section id="achievements" label="07 / Recognition" title="ACHIEVEMENTS">
      <div className="grid gap-5 md:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col rounded-2xl glass glass-hover p-6">
              <span className="grid size-10 place-items-center rounded-lg border border-violet/30 bg-violet/10 text-violet">
                <Trophy className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug">{a.title}</h3>
              {a.detail ? <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p> : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
