import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Params = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.title} | Project` };
}

export default function ProjectDetailPage({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <Link href="/projects" className="text-sm text-foreground/70 hover:underline">← Back to projects</Link>
      <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h1>
      <p className="mt-3 text-foreground/80">{project.description}</p>
      <div className="mt-6 flex gap-4">
        {project.url && (
          <a className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-4 py-2 text-sm hover:border-foreground/40" href={project.url} target="_blank" rel="noreferrer">
            Live site
          </a>
        )}
        {project.repo && (
          <a className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-4 py-2 text-sm hover:border-foreground/40" href={project.repo} target="_blank" rel="noreferrer">
            Source code
          </a>
        )}
      </div>
    </main>
  );
}


