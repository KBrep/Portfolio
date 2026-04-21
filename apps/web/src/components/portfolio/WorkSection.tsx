"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface WorkCategory {
  keyword: string;
  titleSuffix: string;
  description: string;
  href: string;
}

const workCategories: WorkCategory[] = [
  {
    keyword: "USER",
    titleSuffix: "((INTERACTION) (EXPERIENCE)).",
    description:
      "Every tap, scroll, and pause is a moment of dialogue between a person and a system. UX is the discipline of making that conversation feel effortless, almost invisible. Life moves with friction; good experience design removes it. This work asks not just how an interface functions, but how it feels to move through it, because in the digital space, experience is not a feature. It is the product.",
    href: "/work/ux-projects",
  },
  {
    keyword: "CONTENT WRITING",
    titleSuffix: "PSYCHOLOGY + DIGITAL MEDIA",
    description:
      "Content is not simply written, it is constructed with intent. This work reflects a structured approach to communication, where language is shaped through behavioural understanding and contextual relevance. The focus lies in translating complex ideas into clear, purposeful narratives that align with both user needs and strategic objectives. Each piece is designed to guide attention, influence perception, and create meaning within digital environments.",
    href: "/work/content-writing",
  },
  {
    keyword: "DIGITAL MEDIA",
    titleSuffix: "CONTENT WRITING + UI/UX",
    description:
      "Digital media is approached as a system of communication rather than isolated outputs. It integrates content, distribution, and audience behaviour into a cohesive structure. The emphasis is on how messages move, adapt, and perform across platforms, balancing creative direction with data-informed decisions. The result is media that is not only visually engaging but strategically aligned with reach, engagement, and measurable impact.",
    href: "/work/digital-media",
  },
  {
    keyword: "PSYCHOLOGY",
    titleSuffix: "UI/UX + DIGITAL MEDIA",
    description:
      "The digital space does not simply respond to behaviour, it shapes it. Psychology here is the practice of understanding what drives people beneath the surface: their instincts, their patterns, their unspoken expectations. In a world where attention is currency and choice is constant, this work exists to bridge the distance between human nature and digital reality.",
    href: "/work/psychology",
  },
  {
    keyword: "DEVELOPMENT",
    titleSuffix: "UI/UX + DIGITAL MEDIA + CONTENT WRITING",
    description:
      "Development is treated as the underlying architecture that enables seamless digital experiences. This work focuses on building structured, scalable systems that support functionality, performance, and integration. Rather than being visible, its value lies in reliability and efficiency, ensuring that interfaces, content, and media operate cohesively. It reflects a balance between technical precision and an understanding of how systems serve user and business needs.",
    href: "/work/development",
  },
];

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="px-6 sm:px-8 py-12 sm:py-16" data-tour="work-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-muted-foreground mb-8">
            Selected Work
          </p>

          <div className="divide-y divide-border">
            {workCategories.map((cat: WorkCategory, i: number) => (
              <motion.div
                key={cat.keyword}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
              >
                <Link
                  href={cat.href}
                  className="group relative flex flex-col sm:flex-row sm:items-start justify-between py-6 sm:py-7 hover:pl-3 transition-all duration-400 cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl tracking-tight mb-2 transition-colors duration-300">
                      <span className="font-bold text-foreground group-hover:text-foreground/70">{cat.keyword}</span>
                      <span className="font-normal text-muted-foreground/60 ml-2 text-base sm:text-lg">
                        {cat.titleSuffix}
                      </span>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl line-clamp-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-1 sm:ml-8 flex-shrink-0">
                    <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
                      <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
