import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border/70 bg-surface/30">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg border border-cyan/40 bg-surface font-display text-lg font-bold text-cyan">
              {profile.initial}
            </span>
            <span className="font-display text-sm font-semibold tracking-[0.18em]">
              {profile.name}
            </span>
          </div>
          <p className="mt-4 font-mono text-[0.68rem] tracking-[0.24em] text-cyan">
            {profile.techLine}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="section-label">Navigation</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground transition-colors hover:text-cyan"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="section-label">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={profile.emailHref} className="break-all text-muted-foreground hover:text-cyan">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.phoneHref} className="text-muted-foreground hover:text-cyan">
                {profile.phone}
              </a>
            </li>
          </ul>
          <a
            href="#home"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/60 px-3.5 py-2 font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            <ArrowUp className="size-3.5" aria-hidden="true" /> BACK TO TOP
          </a>
        </div>
      </div>

      <div className="border-t border-border/70 py-5 text-center font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
