import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h1>
      <p className="mt-3 text-foreground/80">Selected personal projects.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group border border-foreground/10 rounded-lg p-4 hover:border-foreground/20 transition-colors"
          >
            <h2 className="font-medium">{project.title}</h2>
            <p className="mt-2 text-sm text-foreground/70">{project.description}</p>
            <span className="mt-3 inline-block text-xs text-foreground/60 group-hover:underline">View details</span>
          </Link>
        ))}
      </div>
    </main>
  );
}


