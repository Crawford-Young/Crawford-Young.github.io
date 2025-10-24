import Link from "next/link";
import Section from "@/components/Section";
import ClubCard from "@/components/ClubCard";
import Card from "@/components/Card";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedProjectCard from "@/components/AnimatedProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";

// Home page
export default function Home() {
  return (
    <main id="top" className="mx-auto max-w-6xl px-6 py-8 md:py-12">
      <Section>
        <AnimatedHero />
      </Section>

      <Section id="about" title="About me">
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
            I'm a senior in Computer Science at Auburn University with a focus
            on web development and software engineering. I lead campus
            initiatives and enjoy building practical tools and polished user
            experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ClubCard name="Web Development Club" role="President" />
            <ClubCard name="Competitive Programming Team" role="Member" />
            <ClubCard name="Ethical Hacking Club" role="Member" />
          </div>

          <div className="bg-muted/30 rounded-lg p-6 border border-border/50">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">
                Academic distinctions:
              </strong>{" "}
              Undergraduate Certificate in Artificial Intelligence Engineering;
              Honors College.
            </p>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Work experience">
        <div className="space-y-6">
          <Card>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-lg text-foreground">
                    FloQast
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    Summer 2025
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Software Engineer Intern
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="projects" title="Personal projects">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((p, index) => (
              <AnimatedProjectCard key={p.slug} project={p} index={index} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/projects">Browse all projects</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact me">
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm open to opportunities and collaborations.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="mailto:crawfordyoung248@gmail.com">Email me</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/crawford-young/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
