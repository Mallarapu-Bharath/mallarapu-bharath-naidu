import { Eye, FileDown, FileText } from "lucide-react";
import { Section, Reveal } from "./Section";
import { resume } from "@/data/portfolioData";

export function Resume() {
  return (
    <Section id="resume" label="08 / Document" title="RESUME">
      <Reveal>
        <div className="flex flex-col items-start gap-6 rounded-2xl glass p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
              <FileText className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold">Full Resume (PDF)</h3>
              {resume.available ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  Opens in a new tab — full academic and internship details.
                </p>
              ) : (
                <p className="mt-1 max-w-lg text-sm text-muted-foreground">
                  Not uploaded yet. Place your PDF at{" "}
                  <code className="font-mono text-xs text-cyan">
                    public/resume/Bharath_Resume.pdf
                  </code>{" "}
                  and set{" "}
                  <code className="font-mono text-xs text-cyan">resume.available = true</code> in{" "}
                  <code className="font-mono text-xs text-cyan">src/data/portfolioData.ts</code>.
                  Both buttons will activate automatically.
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={resume.available ? resume.path : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!resume.available}
              className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-colors ${
                resume.available
                  ? "border-cyan/50 bg-cyan/15 text-cyan hover:bg-cyan/25"
                  : "pointer-events-none border-border bg-surface-2/50 text-muted-foreground opacity-60"
              }`}
            >
              <Eye className="size-4" aria-hidden="true" /> VIEW RESUME
            </a>
            <a
              href={resume.available ? resume.path : undefined}
              download
              aria-disabled={!resume.available}
              className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-colors ${
                resume.available
                  ? "border-border bg-surface/60 text-foreground hover:border-cyan/50 hover:text-cyan"
                  : "pointer-events-none border-border bg-surface-2/50 text-muted-foreground opacity-60"
              }`}
            >
              <FileDown className="size-4" aria-hidden="true" /> DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
