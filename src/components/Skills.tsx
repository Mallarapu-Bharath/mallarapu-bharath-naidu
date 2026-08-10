import { Section, Reveal } from "./Section";
import { skills } from "@/data/portfolioData";

export function Skills() {
  return (
    <Section
      id="skills"
      label="02 / Toolkit"
      title="TECHNICAL SKILLS"
      intro="Technologies and tools I work with across AI, IoT and embedded development."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, gi) => (
          <Reveal key={group.group} delay={gi * 0.08}>
            <div className="h-full rounded-2xl glass glass-hover p-6">
              <p className="section-label">{group.group}</p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-surface-2/70 px-3.5 py-2 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_28px_-12px_var(--cyan)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
