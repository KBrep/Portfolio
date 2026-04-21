"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import KnotItDownMetrics from "./knotitdown/KnotItDownMetrics";
import KnotItDownResearch from "./knotitdown/KnotItDownResearch";
import KnotItDownProcess from "./knotitdown/KnotItDownProcess";
import KnotItDownTesting from "./knotitdown/KnotItDownTesting";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const tags = [
  "Embodied Learning",
  "Education",
  "Meta-cognition",
  "Speculative Design",
  "Tangible Interaction",
];

export default function KnotItDownCaseStudy() {
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
              Embodied Learning / Education
            </span>
            <span className="text-xs text-muted-foreground/50">2024</span>
          </div>

          <h1 className="heading-lg mb-6 max-w-4xl">
            Don&rsquo;t note it. Knot it.
          </h1>

          <p className="body-lg max-w-3xl mb-8 text-justify">
            Knot it Down is a speculative design project that translates
            abstract historical timelines into embodied, tactile experiences.
            Redefining history education through immersive environments that
            let you play with time, the project draws on embodied cognition,
            constructivist learning theory, and the ancient Inca Khipu to
            reimagine how we engage with the past.
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
            <p className="text-sm font-medium">Project Lead (Team Project)</p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
              Domain
            </p>
            <p className="text-sm font-medium">
              Embodied Learning / Education / Meta-cognition
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
              Context
            </p>
            <p className="text-sm font-medium">
              Master&rsquo;s in UX Design, Kingston University
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
                History education remains overwhelmingly textual and visual:
                dates on a page, events on a timeline, narratives told through
                words and images. For many learners, this creates a fundamental
                disconnect. The past feels abstract, distant, and inert. The
                sheer density of information flattens the emotional and
                cognitive texture of historical events into a sequence to be
                memorised rather than an experience to be understood.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed mb-8 text-justify">
                This project asked whether a different kind of engagement was
                possible. Not replacing text, but supplementing it with
                something the body could participate in. What if historical
                timelines could be felt, not just seen?
              </p>

              <div className="pl-6 border-l-2 border-border">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Core Research Question
                </p>
                <ul className="space-y-3">
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    How might tactile, embodied interaction with historical data
                    transform the way learners construct understanding of time,
                    causation, and significance?
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    Can the physical act of knotting serve as a cognitive
                    scaffold for understanding complex historical relationships?
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    What does it mean to design for embodied learning when the
                    subject matter is inherently abstract?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16 sm:my-24" />

        {/* ── Key Metrics ── */}
        <KnotItDownMetrics />

        <Separator className="my-16 sm:my-24" />

        {/* ── Research & Theoretical Grounding ── */}
        <KnotItDownResearch />

        <Separator className="my-16 sm:my-24" />

        {/* ── Process & Design Concepts ── */}
        <KnotItDownProcess />

        <Separator className="my-16 sm:my-24" />

        {/* ── Testing & Feedback ── */}
        <KnotItDownTesting />

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
                  "The Khipu as a design precedent gave the project immediate conceptual credibility. It demonstrated that non-textual information systems are not hypothetical but historically proven, grounding speculative design in real-world evidence.",
                  "The 5-phase process created a disciplined progression from abstract thinking to concrete design decisions, preventing the project from becoming untethered speculation.",
                  "The knot-as-event metaphor proved remarkably versatile. It could encode significance through size, causation through threading, and temporal distance through tension, all within a single coherent system.",
                  "Peer feedback consistently highlighted the project's intellectual ambition and the rigour of its theoretical grounding, suggesting the speculative framework was convincing even without a functional prototype.",
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
                Future Directions
              </h3>
              <ul className="space-y-4">
                {[
                  "Building a functional prototype, potentially using Unreal Engine or a physical computing approach, to test whether the theoretical benefits of embodied learning translate into measurable improvements in historical understanding.",
                  "Conducting formal user testing with history students and educators to evaluate the knot metaphor's effectiveness as a learning tool across different age groups and educational contexts.",
                  "Exploring accessibility considerations: how might the system accommodate learners with different physical capabilities while preserving the embodied nature of the interaction?",
                  "Investigating how the framework could extend beyond history to other abstract domains: could scientific timelines, musical composition, or legal precedent benefit from similar tactile encoding?",
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
                Knot it Down reinforced something I have come to believe
                through practice: the most interesting design work happens when
                you take a constraint seriously enough to let it reshape your
                assumptions. The constraint here was embodiment. What happens
                when you insist that learning must involve the body, not as an
                afterthought or an accessibility feature, but as the primary
                channel for understanding?
              </p>

              <div className="bg-secondary/50 p-8 sm:p-10">
                <p className="text-lg sm:text-xl leading-relaxed italic text-foreground/80 text-justify">
                  &ldquo;The most compelling outcome of this project was not a
                  prototype or a screen. It was the realisation that an ancient
                  civilisation had already solved a problem we are still
                  struggling with: how to make abstract information tangible.
                  The Inca did not need a screen. They needed string.&rdquo;
                </p>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground mt-8 text-justify">
                As a speculative project, Knot it Down exists in the space
                between provocation and proposal. It does not claim to have
                proven anything. What it does is argue, through rigorous
                conceptual design, that there are fundamentally different ways
                to engage with historical knowledge, and that those ways are
                worth exploring. The knot is not just a metaphor. It is an
                invitation to think differently about what it means to learn.
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
              href="https://drive.google.com/drive/folders/1PClKzq47p_8y8Z-NmUthvGwTnmMTufOm?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border border-border hover:bg-secondary/30 transition-colors duration-300"
            >
              <div>
                <p className="text-sm font-semibold tracking-tight mb-1">
                  Project Artefacts
                </p>
                <p className="text-xs text-muted-foreground">
                  Research documentation, sketches &amp; deliverables
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
