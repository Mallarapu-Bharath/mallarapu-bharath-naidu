import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  label,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-20 sm:py-28 ${className}`}>
      <Reveal>
        <p className="section-label">{label}</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          <span className="text-gradient">{title}</span>
        </h2>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-cyan to-transparent" />
        {intro ? <p className="mt-5 max-w-2xl text-muted-foreground">{intro}</p> : null}
      </Reveal>
      <div className="mt-10 sm:mt-14">{children}</div>
    </section>
  );
}
