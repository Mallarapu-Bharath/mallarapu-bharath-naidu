import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { navLinks, profile, resume } from "@/data/portfolioData";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5"
      >
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-cyan/40 bg-surface font-display text-lg font-bold text-cyan shadow-[0_0_24px_-8px_var(--cyan)]">
            {profile.initial}
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.18em]">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-2.5 py-2 font-mono text-[0.68rem] tracking-[0.14em] text-muted-foreground transition-colors hover:text-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {resume.available ? (
            <a
              href={resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-3.5 py-2 font-mono text-[0.68rem] tracking-[0.14em] text-cyan transition-colors hover:bg-cyan/20 sm:inline-flex"
            >
              <FileDown className="size-3.5" aria-hidden="true" /> DOWNLOAD RESUME
            </a>
          ) : (
            <a
              href="#resume"
              className="hidden items-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-3.5 py-2 font-mono text-[0.68rem] tracking-[0.14em] text-cyan transition-colors hover:bg-cyan/20 sm:inline-flex"
            >
              <FileDown className="size-3.5" aria-hidden="true" /> RESUME
            </a>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-lg border border-border bg-surface/60 text-foreground xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl xl:hidden"
          >
            <ul className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-mono text-xs tracking-[0.18em] text-muted-foreground transition-colors hover:bg-surface hover:text-cyan"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resume.available ? resume.path : "#resume"}
                  target={resume.available ? "_blank" : undefined}
                  rel={resume.available ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-3 py-3 font-mono text-xs tracking-[0.18em] text-cyan"
                >
                  <FileDown className="size-4" aria-hidden="true" />
                  {resume.available ? "DOWNLOAD RESUME" : "RESUME"}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
