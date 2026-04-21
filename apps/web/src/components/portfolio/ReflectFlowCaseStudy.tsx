"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import ReflectFlowMetrics from "./reflectflow/ReflectFlowMetrics";
import ReflectFlowResearch from "./reflectflow/ReflectFlowResearch";
import ReflectFlowProcess from "./reflectflow/ReflectFlowProcess";
import ReflectFlowTesting from "./reflectflow/ReflectFlowTesting";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const tags = [
  "Cognitive UX",
  "Emotional Awareness",
  "Persuasive Design",
  "Speculative UX",
  "Digital Self-Regulation",
];

export default function ReflectFlowCaseStudy() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-40px" });
  const outcomeRef = useRef(null);
  const outcomeInView = useInView(outcomeRef, { once: true, margin: "-80px" });
  const reflectRef = useRef(null);
  const reflectInView = useInView(reflectRef, { once: true, margin: "-80px" });
  const linksRef = useRef(null);
  const linksInView = useInView(linksRef, { once: true, margin: "-80px" });

  return (
    <article className="px-6 sm:px-8 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        {/* ── Hero ── */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 24 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Cognitive / Emotional Awareness
            </span>
            <span className="text-xs text-muted-foreground/50">2024</span>
          </div>

          <h1 className="heading-lg mb-6 max-w-4xl">
            What if your interface asked you to pause before you clicked?
          </h1>

          <p className="body-lg max-w-3xl mb-8 text-justify">
            Reflect Flow is a speculative UX research project exploring whether
            emotional self-awareness, surfaced through interaction cues, can
            reshape impulsive digital behaviour in e-commerce and social media.
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[0.7rem] font-medium tracking-wider uppercase px-3 py-1.5 border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Meta strip ── */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y"
        >
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
              Role
            </p>
            <p className="text-sm font-medium">
              Independent, End-to-End (Solo)
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
              Domain
            </p>
            <p className="text-sm font-medium">
              Cognitive / Emotional Awareness / Persuasive UX
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
              Context
            </p>
            <p className="text-sm font-medium">
              Master&rsquo;s in UX Design Coursework
            </p>
          </div>
        </motion.div>

        {/* ── Problem Statement ── */}
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
              <p className="text-lg sm:text-xl leading-relaxed mb-6 text-justify">
                Digital interfaces are optimised for speed. Every interaction is
                engineered to reduce friction, accelerate decisions, and keep
                users moving forward. But speed comes at a cost. In e-commerce
                and social media, the moments where impulsivity peaks are
                precisely the moments where no meaningful design intervention
                exists to invite reflection.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed mb-8 text-justify">
                Reflect Flow asked a foundational question: what happens when we
                design for pause instead of pace? Can interaction cues, crafted
                with emotional intelligence, create space for self-awareness at
                the exact moment a user is about to act on impulse? The core
                user group studied was digitally active users aged 18 to 35,
                engaging daily with online shopping and social media platforms.
              </p>

              <div className="pl-6 border-l-2 border-border">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Objectives
                </p>
                <ul className="space-y-3">
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    Investigate how emotional self-awareness can be surfaced
                    through UX design at peak impulsivity moments.
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    Explore whether metaphor-based visual cues can invite
                    genuine reflection without disrupting the user experience.
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    Validate the premise that well-crafted emotional cues can
                    reshape impulsive digital behaviour in e-commerce and social
                    media contexts.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16 sm:my-24" />

        {/* ── Key Metrics ── */}
        <ReflectFlowMetrics />

        <Separator className="my-16 sm:my-24" />

        {/* ── Research Methods ── */}
        <ReflectFlowResearch />

        <Separator className="my-16 sm:my-24" />

        {/* ── Process Highlights ── */}
        <ReflectFlowProcess />

        <Separator className="my-16 sm:my-24" />

        {/* ── Testing & Feedback ── */}
        <ReflectFlowTesting />

        <Separator className="my-16 sm:my-24" />

        {/* ── Outcomes ── */}
        <motion.section
          ref={outcomeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={outcomeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
            Outcomes
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
                What Worked Well
              </h3>
              <ul className="space-y-4">
                {[
                  "Metaphor-based cues resonated with participants. The use of fluid transitions, ripple animations, and colour gradients as emotional signals created a design language that felt intuitive rather than intrusive, inviting reflection without breaking flow.",
                  "Emotional triggers as navigation proved effective. Participants described the cues as gentle interruptions that made them question their pace, validating the hypothesis that emotional awareness can be surfaced through interaction design.",
                  "The speculative framing opened productive conversations. Participants engaged with the concept not as a finished product but as a provocation, discussing broader questions about how digital interfaces shape behaviour and whether design has a responsibility to slow us down.",
                  "The Research, Make, Check framework provided clarity. Structuring the project across three phases kept the work grounded in evidence while allowing space for speculative exploration and iterative refinement.",
                ].map((item: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-muted-foreground/40 text-sm font-medium mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-relaxed text-muted-foreground text-justify">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
                What Needs Refinement
              </h3>
              <ul className="space-y-4">
                {[
                  "Interventions with noticeable delay created friction. Some participants found that cues which paused the interface too visibly felt disruptive rather than reflective. The threshold between a gentle invitation and an unwelcome interruption proved narrow and context-dependent.",
                  "Visual calibration requires further iteration. Certain gradient transitions and ripple effects were perceived as decorative rather than meaningful by a subset of participants, suggesting the need for tighter alignment between visual metaphor and emotional intent.",
                  "The two digital contexts (e-commerce and social media) responded differently to the same cues. Interventions that felt natural in a shopping flow sometimes felt out of place in a social media feed, indicating that reflective design may need platform-specific tuning.",
                  "Long-term behavioural impact remains untested. As a speculative coursework project, Reflect Flow could not measure whether the reflective cues produce lasting changes in impulsive behaviour or whether their effect diminishes with repeated exposure.",
                ].map((item: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-muted-foreground/40 text-sm font-medium mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-relaxed text-muted-foreground text-justify">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16 sm:my-24" />

        {/* ── Reflection ── */}
        <motion.section
          ref={reflectRef}
          initial={{ opacity: 0, y: 20 }}
          animate={reflectInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
            Reflection
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl leading-relaxed mb-8 text-justify">
                Reflect Flow reinforced a conviction that has shaped much of my
                design thinking: the most important moments in a digital
                experience are not the ones where users act, but the ones where
                they almost act and then pause. Designing for that pause, making
                it feel natural rather than forced, is one of the most
                challenging and necessary frontiers in interaction design.
              </p>

              <div className="bg-secondary/50 p-8 sm:p-10">
                <p className="text-lg sm:text-xl leading-relaxed italic text-foreground/80 text-justify">
                  &ldquo;This project was never about stopping people from
                  clicking. It was about giving them one quiet moment to ask
                  themselves why they were about to. That distinction, between
                  restriction and reflection, is where thoughtful design
                  lives.&rdquo;
                </p>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground mt-8 text-justify">
                Working at the intersection of cognitive psychology and
                interaction design taught me that emotional awareness is not a
                feature to be added but a quality to be woven into every
                transition, every colour shift, every moment of stillness. Reflect
                Flow exists as a provocation: a question about whether the
                interfaces that shape our daily behaviour could also be designed
                to help us understand it.
              </p>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16 sm:my-24" />

        {/* ── Links ── */}
        <motion.section
          ref={linksRef}
          initial={{ opacity: 0, y: 20 }}
          animate={linksInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Project Artefacts
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://www.figma.com/proto/2LnZr44ABuwl1SiowHbgwQ/Reflect-Flow?node-id=265-3596&viewport=-664%2C589%2C0.07&t=JOYFoP0R0WKLGN7P-1&scaling=contain&content-scaling=fixed&starting-point-node-id=67%3A2186&show-proto-sidebar=1&page-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border border-border hover:bg-secondary/30 transition-colors duration-300"
            >
              <div>
                <p className="text-sm font-semibold tracking-tight mb-1">
                  Figma Prototype
                </p>
                <p className="text-xs text-muted-foreground">
                  Interactive prototype and design screens
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-300"
              />
            </a>

            <a
              href="https://drive.google.com/drive/folders/1WKN_mMESJs2vdUMG47wc-ZmbdG0sPQor?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border border-border hover:bg-secondary/30 transition-colors duration-300"
            >
              <div>
                <p className="text-sm font-semibold tracking-tight mb-1">
                  Project Artefacts
                </p>
                <p className="text-xs text-muted-foreground">
                  Research documentation and deliverables
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-300"
              />
            </a>
          </div>
        </motion.section>

        {/* ── Navigation ── */}
        <div className="mt-24 sm:mt-32 pt-8 border-t">
          <a
            href="/work/ux-projects"
            className="text-sm font-medium tracking-wider uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            &larr; All UX Case Studies
          </a>
        </div>
      </div>
    </article>
  );
}
