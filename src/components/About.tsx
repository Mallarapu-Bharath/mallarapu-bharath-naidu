import { Brain, Cpu, CircuitBoard, Radio, Bot } from "lucide-react";
import { Section, Reveal } from "./Section";
import { about } from "@/data/portfolioData";

const icons = [Brain, Radio, Cpu, CircuitBoard, Bot];

export function About() {
  return (
    <Section id="about" label="01 / Profile" title={about.heading}>
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="rounded-2xl glass p-7 sm:p-9">
          <div className="space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {about.highlights.map((h, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={h.title} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-xl glass glass-hover p-4">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold">{h.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{h.detail}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
