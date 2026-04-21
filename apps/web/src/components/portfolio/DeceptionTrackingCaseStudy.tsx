"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import DeceptionMetrics from "./deceptiontracking/DeceptionMetrics";
import DeceptionResearch from "./deceptiontracking/DeceptionResearch";
import DeceptionProcess from "./deceptiontracking/DeceptionProcess";
import DeceptionTesting from "./deceptiontracking/DeceptionTesting";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const tags = [
  "Speculative UX",
  "VR Interaction",
  "Neural Technology",
  "Biosignal Design",
  "Ethical HCI",
];

export default function DeceptionTrackingCaseStudy() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-40px" });
  const outcomeRef = useRef(null);
  const outcomeInView = useInView(outcomeRef, { once: true, margin: "-80px" });
  const reflectRef = useRef(null);
  const reflectInView = useInView(reflectRef, { once: true, margin: "-80px" });
  const futureRef = useRef(null);
  const futureInView = useInView(futureRef, { once: true, margin: "-80px" });

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
              Speculative UX / VR Neural Interface
            </span>
            <span className="text-xs text-muted-foreground/50">2024</span>
          </div>

          <h1 className="heading-lg mb-6 max-w-4xl">
            What if you could see the truth in real time?
          </h1>

          <p className="body-lg max-w-3xl mb-8 text-justify">
            A speculative UX exploration of integrating neural technology
            and AI to surface real-time truthfulness feedback during VR
            interactions, translating biosignal data into visual indicators
            that expose what avatars conceal.
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
              UX Researcher &amp; Speculative Designer
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
              Domain
            </p>
            <p className="text-sm font-medium">
              VR Interaction / Neural Technology / Ethical Design
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
              Context
            </p>
            <p className="text-sm font-medium">Academic / Speculative</p>
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
                In face-to-face conversation, humans rely on a rich ecology
                of non-verbal signals to gauge sincerity: micro-expressions,
                vocal tremors, eye movement patterns, physiological tells
                that have been refined across millennia of social evolution.
                Virtual reality strips almost all of these away. Avatars
                flatten emotional complexity into predetermined animations.
                Voice is mediated and compressed. Body language is
                reconstructed from controller inputs, not observed from
                living bodies.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed mb-8 text-justify">
                The result is a communication environment where deception
                carries no natural cost and trust has no reliable signal.
                This project asked what would happen if emerging neural
                technology could restore, and even surpass, the
                truthfulness cues that VR has erased, and whether designing
                such a system is something we should want.
              </p>

              <div className="pl-6 border-l-2 border-border">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Core Design Question
                </p>
                <ul className="space-y-3">
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    How might biosignal data be translated into meaningful
                    truthfulness indicators without reducing complex human
                    states to binary judgments?
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    What are the ethical boundaries of surfacing internal
                    states that a person has not chosen to reveal?
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    Can feedback about sincerity be designed to support
                    trust-building rather than weaponise suspicion?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16 sm:my-24" />

        {/* ── Key Metrics ── */}
        <DeceptionMetrics />

        <Separator className="my-16 sm:my-24" />

        {/* ── Research Methods ── */}
        <DeceptionResearch />

        <Separator className="my-16 sm:my-24" />

        {/* ── Process Highlights ── */}
        <DeceptionProcess />

        <Separator className="my-16 sm:my-24" />

        {/* ── Testing & Feedback ── */}
        <DeceptionTesting />

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
                  "The project demonstrated the plausibility of biosignal integration in VR environments, mapping six distinct physiological data streams to visual feedback forms that could be computationally feasible within a near-future technological trajectory.",
                  "The multiple feedback modalities (meter, halo, score, opacity) provoked fundamentally different ethical reactions from reviewers, validating the hypothesis that how truthfulness data is presented matters as much as whether it is presented at all.",
                  "The speculative framing freed the design from current technical constraints, enabling exploration of interaction patterns that would be impossible to prototype with today's hardware but are plausible within the next decade of neural interface development.",
                  "Ethical tensions between transparency and privacy became productive design constraints rather than blockers. The project's refusal to resolve these tensions was consistently identified by reviewers as its greatest strength.",
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
                What Needs Further Development
              </h3>
              <ul className="space-y-4">
                {[
                  "Biosignal noise and interpretation accuracy remain the project's largest scientific gap. Current EEG and GSR technology cannot reliably distinguish deception from anxiety, excitement, or cognitive load, a limitation that any future implementation must confront directly.",
                  "Cross-cultural variation in emotional expression, physiological baselines, and social norms around disclosure were acknowledged but not deeply explored. A responsible version of this system would require extensive anthropological research before deployment.",
                  "The risk of feedback systems being weaponised for manipulation, interrogation, or social coercion was raised in every critique session. The project needs a more developed framework for consent, opt-out mechanisms, and adversarial use prevention.",
                  "Formal user testing is essential for any progression beyond the conceptual stage. The informal critique sessions generated valuable ethical discourse but did not evaluate the designs' effectiveness as interaction patterns.",
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

        {/* ── Future Directions ── */}
        <motion.section
          ref={futureRef}
          initial={{ opacity: 0, y: 20 }}
          animate={futureInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
            Future Directions
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl leading-relaxed mb-6 text-justify">
                The trajectory of neural interface technology suggests that
                biosignal-rich VR environments are not a question of if but
                when. As brain-computer interfaces mature and wearable
                biosensors become ambient, the design questions explored in
                this project will shift from speculative to urgent.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-6 text-justify">
                Future work should focus on developing robust consent
                frameworks for physiological data sharing in social VR,
                exploring culturally adaptive feedback systems that account
                for variation in emotional expression, and establishing
                design principles that prevent truthfulness feedback from
                being co-opted as tools of control. The goal is not to
                build a lie detector but to understand what trust looks
                like when technology can see what we feel.
              </p>
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
                This project confronted me with the most uncomfortable
                question in speculative design: just because you can
                imagine it, should you build it? Designing for invisible
                mental states, translating the interior life of another
                person into visual data, is an act of profound power. The
                design challenge was not making the feedback legible. It
                was making the implications visible.
              </p>

              <div className="bg-secondary/50 p-8 sm:p-10">
                <p className="text-lg sm:text-xl leading-relaxed italic text-foreground/80 text-justify">
                  &ldquo;The most honest thing a truthfulness system can
                  do is reveal its own limitations. The moment we design
                  technology that claims to know what someone really
                  thinks, we have stopped designing for trust and started
                  designing for control. The ethical line is not where
                  the data ends. It is where the interpretation begins.&rdquo;
                </p>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground mt-8 text-justify">
                Working at the intersection of neuroscience, VR, and
                ethical design taught me that the most important design
                decisions are often the ones where you choose not to
                build. This project exists as a provocation: a carefully
                considered exploration of what becomes possible when
                technology can read us, and a reminder that possibility
                is never the same as permission.
              </p>
            </div>
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
