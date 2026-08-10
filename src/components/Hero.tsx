import { lazy, Suspense, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Phone, FileDown } from "lucide-react";
import { profile, resume } from "@/data/portfolioData";

const HeroScene = lazy(() => import("./3d/HeroScene"));

function SceneFallback() {
  return (
    <div className="grid h-[360px] w-full place-items-center rounded-2xl border border-border/60 bg-surface/40 sm:h-[460px] lg:h-[560px]">
      <span className="font-mono text-[0.68rem] tracking-[0.25em] text-muted-foreground">
        LOADING 3D CORE…
      </span>
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => setMounted(true), []);

  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-glow" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-bg" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.p {...item(0)} className="section-label">
            {profile.greeting}
          </motion.p>

          <motion.h1
            {...item(0.08)}
            className="mt-4 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            {...item(0.16)}
            className="mt-4 font-display text-xl font-medium tracking-[0.08em] text-foreground sm:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            {...item(0.22)}
            className="mt-2 font-mono text-xs tracking-[0.28em] text-cyan sm:text-sm"
          >
            {profile.techLine}
          </motion.p>

          <motion.p {...item(0.3)} className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.summary}
          </motion.p>

          <motion.div {...item(0.38)} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-cyan/50 bg-cyan/15 px-5 py-3 text-sm font-medium text-cyan transition-all hover:bg-cyan/25 hover:shadow-[0_0_36px_-10px_var(--cyan)]"
            >
              EXPLORE MY PROJECTS
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-violet/50 hover:text-violet"
            >
              CONTACT ME
            </a>
            <a
              href={resume.available ? resume.path : "#resume"}
              target={resume.available ? "_blank" : undefined}
              rel={resume.available ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <FileDown className="size-4" aria-hidden="true" /> DOWNLOAD RESUME
            </a>
          </motion.div>

          <motion.div
            {...item(0.46)}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/70 pt-6 text-sm"
          >
            <a
              href={profile.phoneHref}
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-cyan"
            >
              <Phone className="size-4" aria-hidden="true" /> {profile.phone}
            </a>
            <a
              href={profile.emailHref}
              className="inline-flex items-center gap-2 break-all text-muted-foreground transition-colors hover:text-cyan"
            >
              <Mail className="size-4" aria-hidden="true" /> {profile.email}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-border/70 glass"
        >
          {mounted ? (
            <Suspense fallback={<SceneFallback />}>
              <HeroScene />
            </Suspense>
          ) : (
            <SceneFallback />
          )}
        </motion.div>
      </div>
    </section>
  );
}
