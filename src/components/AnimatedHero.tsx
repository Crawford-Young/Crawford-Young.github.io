"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function AnimatedHero() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        Crawford Young
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Senior Computer Science student at Auburn University (Fall 2025).
        <br />
        Previous FloQast Software Engineer Intern (Summer 2025).
      </motion.p>
      <motion.div
        className="flex flex-wrap gap-3 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <Badge variant="outline" className="text-sm px-3 py-1">
          Computer Science
        </Badge>
        <Badge variant="outline" className="text-sm px-3 py-1">
          Software Engineer
        </Badge>
        <Badge variant="outline" className="text-sm px-3 py-1">
          Auburn University
        </Badge>
      </motion.div>
    </motion.div>
  );
}
