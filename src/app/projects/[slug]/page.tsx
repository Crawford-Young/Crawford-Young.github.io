import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.title} | Project` };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-8 md:py-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to projects
          </Link>

          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {project.title}
              </h1>
              <Badge variant="outline" className="text-sm">
                Project
              </Badge>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>

        <Separator />

        <div className="flex flex-wrap gap-4">
          {project.url && (
            <Button asChild>
              <a href={project.url} target="_blank" rel="noreferrer">
                Live site
              </a>
            </Button>
          )}
          {project.repo && (
            <Button variant="outline" asChild>
              <a href={project.repo} target="_blank" rel="noreferrer">
                Source code
              </a>
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
