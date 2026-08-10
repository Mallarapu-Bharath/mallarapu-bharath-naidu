import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Languages } from "@/components/Languages";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "M. Bharath | ECE Engineer | AI • IoT • Embedded Systems";
const description =
  "Professional portfolio of M. Bharath showcasing Electronics and Communication Engineering, AI, IoT, Embedded Systems, projects, internships, certifications and achievements.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "M. Bharath",
          jobTitle: "Electronics and Communication Engineering Student",
          email: "mailto:mallarapubharathnaidu@gmail.com",
          telephone: "+91-9398191840",
          alumniOf: "R.M.K Engineering College",
          knowsAbout: ["Artificial Intelligence", "IoT", "Embedded Systems", "Electronics"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Languages />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
