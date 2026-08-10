import { Phone, Mail, Linkedin, Github, User } from "lucide-react";
import { Section, Reveal } from "./Section";
import { profile } from "@/data/portfolioData";

export function Contact() {
  return (
    <Section
      id="contact"
      label="09 / Contact"
      title="LET'S CONNECT"
      intro="Open to internships and entry-level roles in AI, IoT and embedded systems."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="h-full rounded-2xl glass p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
                <User className="size-4" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-semibold">{profile.name}</h3>
            </div>

            <dl className="mt-7 space-y-4 text-sm">
              <div>
                <dt className="section-label">Phone</dt>
                <dd className="mt-1">
                  <a href={profile.phoneHref} className="text-foreground hover:text-cyan">
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="section-label">Email</dt>
                <dd className="mt-1">
                  <a href={profile.emailHref} className="break-all text-foreground hover:text-cyan">
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid h-full gap-3 sm:grid-cols-2">
            <a
              href={profile.phoneHref}
              className="flex items-center gap-3 rounded-2xl border border-cyan/40 bg-cyan/10 p-5 text-cyan transition-colors hover:bg-cyan/20"
            >
              <Phone className="size-5" aria-hidden="true" />
              <span className="font-medium">CALL ME</span>
            </a>
            <a
              href={profile.emailHref}
              className="flex items-center gap-3 rounded-2xl border border-violet/40 bg-violet/10 p-5 text-violet transition-colors hover:bg-violet/20"
            >
              <Mail className="size-5" aria-hidden="true" />
              <span className="font-medium">EMAIL ME</span>
            </a>

            {profile.linkedin ? (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl glass glass-hover p-5"
              >
                <Linkedin className="size-5 text-cyan" aria-hidden="true" />
                <span className="font-medium">LINKEDIN</span>
              </a>
            ) : (
              <div className="flex flex-col justify-center gap-1 rounded-2xl border border-dashed border-border bg-surface-2/40 p-5">
                <span className="flex items-center gap-3 font-medium text-muted-foreground">
                  <Linkedin className="size-5" aria-hidden="true" /> LINKEDIN
                </span>
                <span className="text-xs italic text-muted-foreground">
                  Link not added yet — set <code className="font-mono">profile.linkedin</code>.
                </span>
              </div>
            )}

            {profile.github ? (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl glass glass-hover p-5"
              >
                <Github className="size-5 text-cyan" aria-hidden="true" />
                <span className="font-medium">GITHUB</span>
              </a>
            ) : (
              <div className="flex flex-col justify-center gap-1 rounded-2xl border border-dashed border-border bg-surface-2/40 p-5">
                <span className="flex items-center gap-3 font-medium text-muted-foreground">
                  <Github className="size-5" aria-hidden="true" /> GITHUB
                </span>
                <span className="text-xs italic text-muted-foreground">
                  Link not added yet — set <code className="font-mono">profile.github</code>.
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
