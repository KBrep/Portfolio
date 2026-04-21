"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import SenseMetrics from "./sense/SenseMetrics";
import SenseResearch from "./sense/SenseResearch";
import SenseProcess from "./sense/SenseProcess";
import SenseTesting from "./sense/SenseTesting";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const tags = [
  "Bio-HCI",
  "Wearable Tech",
  "AI Diagnostics",
  "Speculative Design",
  "UX Design",
];

export default function SenseCaseStudy() {
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
              Bio-HCI / Wearable Design
            </span>
            <span className="text-xs text-muted-foreground/50">2024</span>
          </div>

          <h1 className="heading-lg mb-6 max-w-4xl">
            Rethinking kidney stone monitoring through wearable, AI-enabled
            design
          </h1>

          <p className="body-lg max-w-3xl mb-8 text-justify">
            SENSE is a speculative Bio-HCI project exploring how wearable
            ultrasound technology and AI-driven diagnostics might reshape the
            lived experience of kidney stone monitoring, from reactive
            treatment to continuous, patient-centred awareness.
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
              UX Researcher &amp; Interaction Designer
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
              Domain
            </p>
            <p className="text-sm font-medium">
              Healthcare / Bio-HCI / Speculative Design
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
              Duration
            </p>
            <p className="text-sm font-medium">12 weeks</p>
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
                Kidney stones affect roughly 1 in 10 people at some point in
                their lives, and recurrence rates sit between 30-50% within
                five years. For patients navigating this reality, the gap
                between clinical encounters is filled with uncertainty:
                anxiety about when the next episode will strike, limited
                visibility into what is happening inside their own bodies, and
                a monitoring paradigm that remains fundamentally reactive.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed mb-8 text-justify">
                Current systems catch stones after they have formed. SENSE
                asked whether design could intervene earlier, shifting the
                relationship between patient and condition from episodic fear
                to continuous awareness.
              </p>

              <div className="pl-6 border-l-2 border-border">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Design Questions Explored
                </p>
                <ul className="space-y-3">
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    How might wearable ultrasound reduce the psychological
                    burden of kidney stone recurrence?
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    What role should AI play in translating clinical data into
                    patient-facing insight?
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    Where does speculative design become a practical framework
                    for healthcare innovation?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16 sm:my-24" />

        {/* ── Key Metrics ── */}
        <SenseMetrics />

        <Separator className="my-16 sm:my-24" />

        {/* ── Research Methods ── */}
        <SenseResearch />

        <Separator className="my-16 sm:my-24" />

        {/* ── Process Highlights ── */}
        <SenseProcess />

        <Separator className="my-16 sm:my-24" />

        {/* ── Testing & Feedback ── */}
        <SenseTesting />

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
                  "The emotional resonance of the concept consistently surprised participants. The idea of continuous, non-invasive monitoring addressed anxieties they had not previously articulated.",
                  "AI-generated insights were perceived as trustworthy when framed as supportive rather than diagnostic, reinforcing the design decision to position SENSE as a companion tool.",
                  "The journey mapping process revealed critical emotional touchpoints that clinical literature alone had not surfaced, validating the value of qualitative, patient-centred research.",
                  "Iterative prototype refinement across four rounds produced measurable improvements in task completion and comprehension.",
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
                What Requires Refinement
              </h3>
              <ul className="space-y-4">
                {[
                  "Data visualisation for stone composition remained difficult for participants to interpret quickly. Future iterations need clearer metaphors or progressive disclosure patterns.",
                  "The boundary between informative and anxiety-inducing notifications proved delicate; alert frequency and tone require further calibration with clinical input.",
                  "Onboarding flows for the wearable pairing process were underestimated in complexity. First-use experience needs dedicated design attention.",
                  "Long-term engagement patterns remain untested; the speculative nature of the project limited ability to measure sustained usage behaviour.",
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
                SENSE reinforced a conviction that has shaped much of my
                practice: healthcare design is not about making clinical
                systems more usable. It is about recognising that the person
                wearing the device, reading the result, or deciding whether to
                act on an alert is navigating something far more complex than a
                user flow.
              </p>

              <div className="bg-secondary/50 p-8 sm:p-10">
                <p className="text-lg sm:text-xl leading-relaxed italic text-foreground/80 text-justify">
                  &ldquo;The most meaningful design decisions in this project
                  were not about interface layout or interaction patterns. They
                  were about understanding what it means to live with a
                  recurring condition, and asking how technology might serve
                  that experience without reducing it to data points on a
                  screen.&rdquo;
                </p>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground mt-8 text-justify">
                Working at the intersection of speculative design and
                healthcare taught me that the most productive design questions
                are often the ones without immediate answers. SENSE exists as
                a provocation as much as a prototype, a way of asking what
                patient-centred monitoring could become if we designed from
                lived experience rather than clinical convention.
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
              href="https://www.figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border border-border hover:bg-secondary/30 transition-colors duration-300"
            >
              <div>
                <p className="text-sm font-semibold tracking-tight mb-1">
                  Figma Prototype
                </p>
                <p className="text-xs text-muted-foreground">
                  Interactive high-fidelity prototype
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-300"
              />
            </a>

            <a
              href="https://drive.google.com/drive/u/0/folders/1vg4UU8w7mx6EUGmcEkV_ZYh8cJOKuZ82"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border border-border hover:bg-secondary/30 transition-colors duration-300"
            >
              <div>
                <p className="text-sm font-semibold tracking-tight mb-1">
                  Project Artefacts
                </p>
                <p className="text-xs text-muted-foreground">
                  Research documentation &amp; deliverables
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
