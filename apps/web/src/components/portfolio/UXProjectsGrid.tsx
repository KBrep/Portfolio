"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface UXProject {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  hasContent: boolean;
  previewImage?: string;
}

const uxProjects: UXProject[] = [
  {
    id: 1,
    slug: "reflect-flow-emotional-awareness",
    title: "Reflect Flow — Emotional Awareness",
    subtitle: "Speculative UX research exploring whether emotional self-awareness cues can reshape impulsive digital behaviour in e-commerce and social media.",
    hasContent: true,
    previewImage: "/reflect-flow-logo.png",
  },
  {
    id: 2,
    slug: "wanderoma-cultural-storytelling",
    title: "Wanderoma — Cultural Storytelling",
    subtitle: "Speculative travel app exploring cultural connection through participatory design and emotionally attuned technology.",
    hasContent: true,
    previewImage: "/wanderoma-logo.png",
  },
  {
    id: 3,
    slug: "knot-it-down",
    title: "Knot it Down — Embodied Learning",
    subtitle: "Translating abstract historical timelines into embodied, tactile experiences through speculative UX design.",
    hasContent: true,
    previewImage: "/knot-it-down-logo.png",
  },
  {
    id: 4,
    slug: "deception-tracking-vr",
    title: "Deception Tracking in VR",
    subtitle: "Speculative UX exploring how neural technology and biosignal-based AI could surface real-time truthfulness feedback during VR interactions.",
    hasContent: true,
    previewImage: "/vr-deception-logo.png",
  },
  {
    id: 5,
    slug: "multi-user-chatgpt-interface",
    title: "Multi-User ChatGPT Interface",
    subtitle: "Speculative UX design reimagining ChatGPT as a dynamic multi-user interface with real-time AI facilitation, emotional awareness, and adaptive communication.",
    hasContent: true,
    previewImage: "/multi-user-chatgpt-logo.png",
  },
  {
    id: 6,
    slug: "sense-kidney-stone-scanner",
    title: "SENSE — Bio-HCI Wearable Scanner",
    subtitle: "Speculative wearable ultrasound design for continuous kidney stone monitoring with AI diagnostics.",
    hasContent: true,
    previewImage: "/sense-logo.png",
  },
];

export default function UXProjectsGrid() {
  return (
    <div className="px-6 sm:px-8 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {uxProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="bg-background"
            >
              {project.hasContent ? (
                <Link
                  href={`/work/${project.slug}`}
                  className="group block p-8 sm:p-10 h-full hover:bg-secondary/30 transition-colors duration-500"
                >
                  {/* UI preview */}
                  <div className="aspect-[4/3] bg-muted/20 border border-border mb-6 flex items-center justify-center overflow-hidden">
                    {project.previewImage ? (
                      <Image
                        src={project.previewImage}
                        alt={`${project.title} preview`}
                        width={320}
                        height={240}
                        className="object-contain w-3/5 h-3/5 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    ) : (
                      <p className="text-xs text-muted-foreground/50 tracking-wider uppercase">
                        UI Preview
                      </p>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold tracking-tight mb-2 group-hover:text-muted-foreground transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      <ArrowUpRight
                        size={14}
                        className="text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-300"
                      />
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="p-8 sm:p-10 h-full opacity-50">
                  {/* Empty slot placeholder */}
                  <div className="aspect-[4/3] bg-muted/10 border border-dashed border-border mb-6 flex items-center justify-center">
                    <p className="text-xs text-muted-foreground/40 tracking-wider uppercase">
                      {project.title}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold tracking-tight mb-2 text-muted-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/60 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
