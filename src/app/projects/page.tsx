import Link from "next/link";
import Card from "@/components/Card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-8 md:py-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Selected personal projects showcasing my work in web development and
            software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block"
            >
              <Card className="h-full">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h2 className="font-semibold text-lg text-foreground tracking-tight">
                      {project.title}
                    </h2>
                    <Badge variant="outline" className="text-xs">
                      Project
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>View details</span>
                    <span>→</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
