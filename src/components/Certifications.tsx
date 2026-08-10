import { Award, ExternalLink } from "lucide-react";
import { Section, Reveal } from "./Section";
import { certifications } from "@/data/portfolioData";

export function Certifications() {
  return (
    <Section id="certifications" label="06 / Credentials" title="CERTIFICATIONS">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06} className="h-full">
            <article className="flex h-full flex-col rounded-2xl glass glass-hover p-6">
              <span className="grid size-10 place-items-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
                <Award className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug">{c.title}</h3>
              <p className="mt-2 font-mono text-[0.68rem] tracking-[0.16em] text-muted-foreground">
                {c.issuer}
              </p>
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-cyan transition-colors hover:underline"
                >
                  VIEW CERTIFICATE <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
