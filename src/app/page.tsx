import Link from "next/link";
import Section from "@/components/Section";
import ClubCard from "@/components/ClubCard";
import Card from "@/components/Card";
import { projects } from "@/data/projects";

// Home page
export default function Home() {
  return (
    <main id="top" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <Section>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Crawford Young
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl">
          Senior Computer Science student at Auburn University (Fall 2025).
          Previous FloQast Software Engineer Intern (Summer 2025).
        </p>
      </Section>

      <Section id="about" title="About me">
        <p className="mt-4 text-foreground/80 leading-7 max-w-3xl">
          I’m a senior in Computer Science at Auburn University with a focus on
          web development and software engineering. I lead campus initiatives
          and enjoy building practical tools and polished user experiences.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ClubCard name="Web Development Club" role="President" />
          <ClubCard name="Competitive Programming Team" role="Member" />
          <ClubCard name="Ethical Hacking Club" role="Member" />
        </div>
        <p className="mt-4 text-sm text-foreground/70">
          Academic distinctions: Undergraduate Certificate in Artificial
          Intelligence Engineering; Honors College.
        </p>
      </Section>

      <Section id="experience" title="Work experience">
        <ul className="mt-6 space-y-6">
          <li className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-medium">FloQast</span>
              <span className="text-sm text-foreground/60">Summer 2025</span>
            </div>
            <p className="mt-2 text-foreground/80">Software Engineer Intern</p>
          </li>
        </ul>
      </Section>

      <Section id="projects" title="Personal projects">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.slice(0, 2).map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="block">
              <Card>
                <h3 className="font-medium tracking-[-0.01em]">{p.title}</h3>
                <p className="text-sm text-foreground/70 mt-2 line-clamp-3">
                  {p.description}
                </p>
                <span className="mt-3 inline-block text-xs text-foreground/60">
                  View project
                </span>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link
            className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-4 py-2 text-sm hover:border-foreground/40"
            href="/projects"
          >
            Browse all projects
          </Link>
        </div>
      </Section>

      <Section id="contact" title="Contact me">
        <p className="mt-4 text-foreground/80">
          I’m open to opportunities and collaborations.
        </p>
        <div className="mt-4 flex gap-3 flex-wrap">
          <a
            className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-4 py-2 text-sm hover:border-foreground/40"
            href="mailto:crawfordyoung248@gmail.com"
          >
            Email me
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-4 py-2 text-sm hover:border-foreground/40"
            href="https://www.linkedin.com/in/crawford-young/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </Section>
    </main>
  );
}
