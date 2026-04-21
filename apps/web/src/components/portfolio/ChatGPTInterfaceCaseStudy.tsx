"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import ChatGPTMetrics from "./chatgptinterface/ChatGPTMetrics";
import ChatGPTResearch from "./chatgptinterface/ChatGPTResearch";
import ChatGPTProcess from "./chatgptinterface/ChatGPTProcess";
import ChatGPTTesting from "./chatgptinterface/ChatGPTTesting";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const tags = [
  "Speculative UX",
  "Multi-User AI",
  "Conversational Design",
  "Emotion-Aware Computing",
  "Collaborative Interfaces",
];

export default function ChatGPTInterfaceCaseStudy() {
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
              Speculative UX / Collaborative AI
            </span>
            <span className="text-xs text-muted-foreground/50">2024</span>
          </div>

          <h1 className="heading-lg mb-6 max-w-4xl">
            What if ChatGPT wasn&rsquo;t just yours?
          </h1>

          <p className="body-lg max-w-3xl mb-8 text-justify">
            A speculative UX design reimagining ChatGPT as a dynamic
            multi-user interface, enabling real-time AI facilitation,
            emotional awareness, and adaptive communication across
            collaborative teams and multilingual groups.
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
              Conversational AI / Collaborative UX / Speculative Design
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
                Conversational AI tools like ChatGPT were designed for a
                singular relationship: one user, one AI, one thread. But
                human communication is rarely that simple. Teams
                brainstorm together. Families navigate decisions across
                languages. Mediators guide groups through conflict. In
                every case, the conversational context is shared,
                layered, and emotionally charged.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed mb-8 text-justify">
                There is no shared AI space. No interface designed for the
                complexity of multiple people thinking, prompting, and
                responding in the same conversational environment. This
                project asked what it would look like if AI stopped being
                a private tool and became a participant in collective
                conversation.
              </p>

              <div className="pl-6 border-l-2 border-border">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Design Questions Explored
                </p>
                <ul className="space-y-3">
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    How might a shared AI interface support collaborative
                    thinking without privileging any single user&rsquo;s
                    input?
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    What role should emotional awareness play in AI-mediated
                    group communication?
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    How can real-time translation preserve conversational
                    nuance across languages and cultures?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16 sm:my-24" />

        {/* ── Key Metrics ── */}
        <ChatGPTMetrics />

        <Separator className="my-16 sm:my-24" />

        {/* ── Research Methods ── */}
        <ChatGPTResearch />

        <Separator className="my-16 sm:my-24" />

        {/* ── Process Highlights ── */}
        <ChatGPTProcess />

        <Separator className="my-16 sm:my-24" />

        {/* ── Testing & Feedback ── */}
        <ChatGPTTesting />

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
                  "The colour-coded prompt threading system proved immediately legible across all peer review sessions, validating the core visual strategy for managing parallel conversations in a shared AI space.",
                  "Framing the AI as a facilitator rather than a tool shifted how reviewers conceptualised their relationship with the interface, generating richer discussion about agency, trust, and collaborative potential.",
                  "The three scenario models (multilingual family, design team, conflict mediation) effectively stress-tested the interface across fundamentally different communication dynamics, surfacing design tensions that a single use case would have missed.",
                  "The speculative framing allowed the project to explore design possibilities unconstrained by current technical limitations, producing concepts that peer reviewers described as both provocative and plausible.",
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
                  "The emotion-aware response module requires significantly deeper research into cross-cultural emotional expression. What reads as supportive in one cultural context may feel intrusive or patronising in another.",
                  "Scalability beyond five simultaneous users remains an open design challenge. The visual threading system becomes increasingly complex as participant count grows, and new patterns for managing conversational density are needed.",
                  "The boundary between helpful AI facilitation and overreach was consistently flagged as unresolved. Designing appropriate intervention thresholds requires empirical testing with real group dynamics.",
                  "Real-time multilingual translation that preserves idiomatic nuance is technically speculative. The design assumes capabilities that do not yet exist at the fidelity required for emotionally sensitive group communication.",
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
                This project pushed my thinking about what conversational AI
                could become when we stop designing it as a private utility
                and start treating it as a social medium. The most
                challenging and rewarding aspect was confronting the
                complexity of human group dynamics and asking whether
                technology could support those dynamics without flattening
                them.
              </p>

              <div className="bg-secondary/50 p-8 sm:p-10">
                <p className="text-lg sm:text-xl leading-relaxed italic text-foreground/80 text-justify">
                  &ldquo;The future of AI is not just about smarter
                  responses. It is about designing for the moment when AI
                  becomes a participant in conversation, not just a
                  recipient of prompts. That shift changes everything: the
                  interface, the ethics, and the way we think about what it
                  means to communicate together.&rdquo;
                </p>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground mt-8 text-justify">
                Working speculatively on multi-user AI interaction taught me
                that the hardest design problems are not technical. They are
                social, cultural, and deeply human. This project exists as
                both a prototype and a provocation: a way of asking whether
                the tools we build for thinking together could be as nuanced
                as the conversations they aim to support.
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
              href="https://www.figma.com/proto/drs3VMJte9q1lnsMml4eO9/Assignment-3?node-id=5-700&t=VYiKbztSCisWFKOV-1"
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
