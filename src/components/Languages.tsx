import { Languages as LanguagesIcon } from "lucide-react";
import { Reveal } from "./Section";
import { languages } from "@/data/portfolioData";

export function Languages() {
  return (
    <section id="languages" className="mx-auto w-full max-w-6xl px-5 pb-6">
      <Reveal>
        <div className="rounded-2xl glass p-7 sm:p-9">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
              <LanguagesIcon className="size-4" aria-hidden="true" />
            </span>
            <h2 className="font-display text-xl font-semibold">LANGUAGES</h2>
          </div>

          <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((l) => (
              <li key={l.name} className="rounded-xl border border-border bg-surface-2/50 p-4">
                <p className="font-display text-sm font-semibold">{l.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{l.level}</p>
                <div className="mt-3 flex gap-1.5" aria-hidden="true">
                  {[1, 2, 3].map((s) => (
                    <span
                      key={s}
                      className={`h-1.5 flex-1 rounded-full ${
                        s <= l.steps ? "bg-cyan shadow-[0_0_14px_-4px_var(--cyan)]" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
