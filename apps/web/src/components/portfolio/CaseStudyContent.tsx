"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  role: string;
  problem: string;
  approach: string;
  decisions: string;
  outcome: string;
  year: string;
}

export default function CaseStudyContent({ project }: { project: Project }) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <article className="px-6 sm:px-8 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Title block */}
        <motion.div {...fadeIn} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
              {project.category}
            </span>
            <span className="text-xs text-muted-foreground/50">{project.year}</span>
          </div>
          <h1 className="heading-lg mb-6">{project.title}</h1>
          <p className="body-lg max-w-2xl">{project.description}</p>
        </motion.div>

        {/* Meta */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y"
        >
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">Role</p>
            <p className="text-sm font-medium">{project.role}</p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">Category</p>
            <p className="text-sm font-medium">{project.category}</p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">Year</p>
            <p className="text-sm font-medium">{project.year}</p>
          </div>
        </motion.div>

        {/* Problem */}
        <motion.section
          {...fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 sm:mt-24"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
            The Problem
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl leading-relaxed">{project.problem}</p>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16 sm:my-24" />

        {/* Approach */}
        <motion.section {...fadeIn} transition={{ duration: 0.8, delay: 0.3 }}>
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Approach
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl leading-relaxed">{project.approach}</p>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16 sm:my-24" />

        {/* Key Decisions */}
        <motion.section {...fadeIn} transition={{ duration: 0.8, delay: 0.4 }}>
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Key Decisions
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl leading-relaxed">{project.decisions}</p>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16 sm:my-24" />

        {/* Outcome */}
        <motion.section {...fadeIn} transition={{ duration: 0.8, delay: 0.5 }}>
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Outcome &amp; Impact
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl leading-relaxed">{project.outcome}</p>
            </div>
          </div>
        </motion.section>

        {/* Navigation */}
        <div className="mt-24 sm:mt-32 pt-8 border-t">
          <a
            href="/#work"
            className="text-sm font-medium tracking-wider uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            ← All Projects
          </a>
        </div>
      </div>
    </article>
  );
}
