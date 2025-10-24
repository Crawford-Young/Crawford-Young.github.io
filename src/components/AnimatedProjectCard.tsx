"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Card from "@/components/Card";

type Project = {
  slug: string;
  title: string;
  description: string;
  url?: string;
  repo?: string;
};

type AnimatedProjectCardProps = {
  project: Project;
  index: number;
};

export default function AnimatedProjectCard({
  project,
  index,
}: AnimatedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        ease: "easeOut",
      }}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <Card className="h-full">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-foreground tracking-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>View project</span>
              <span>→</span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
