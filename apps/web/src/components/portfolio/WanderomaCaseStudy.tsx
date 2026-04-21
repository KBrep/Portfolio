"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import WanderomaMetrics from "./wanderoma/WanderomaMetrics";
import WanderomaResearch from "./wanderoma/WanderomaResearch";
import WanderomaProcess from "./wanderoma/WanderomaProcess";
import WanderomaTesting from "./wanderoma/WanderomaTesting";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const tags = [
  "Travel",
  "Cultural Storytelling",
  "Speculative Design",
  "Participatory Design",
  "UX Design",
];

export default function WanderomaCaseStudy() {
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
              Travel / Cultural Storytelling
            </span>
            <span className="text-xs text-muted-foreground/50">2024</span>
          </div>

          <h1 className="heading-lg mb-6 max-w-4xl">
            Travel deeper. Connect with culture, not just coordinates.
          </h1>

          <p className="body-lg max-w-3xl mb-8 text-justify">
            Wanderoma is a speculative cultural storytelling app for travellers,
            designed to bridge the gap between visiting a place and genuinely
            understanding it. Born from a Master&rsquo;s in UX Design coursework
            project, it explores how participatory design and emotionally attuned
            technology might transform tourism from surface-level consumption
            into meaningful cultural exchange.
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

        {/* ── Logo Preview ── */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white/5 border border-border rounded-2xl flex items-center justify-center p-8">
            <Image
              src="/wanderoma-logo.svg"
              alt="Wanderoma Logo"
              width={200}
              height={200}
              className="object-contain opacity-90"
              priority
            />
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
              Travel / Cultural Storytelling / Speculative Design
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
                Tourism, as it exists today, often reduces culture to a
                commodity. Travellers move through cities guided by algorithms
                and aggregated ratings, visiting the same landmarks, eating at
                the same recommended restaurants, and leaving with photographs
                but rarely with understanding. The stories, traditions, and daily
                practices that give a place its character remain hidden in plain
                sight.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed mb-8 text-justify">
                Wanderoma asked a different question: what if a travel app did
                not optimise for efficiency or popularity, but for depth? What if
                the goal was not to help travellers see more, but to help them
                feel more, to shift from being an audience to being a
                participant in the culture they are visiting?
              </p>

              <div className="pl-6 border-l-2 border-border">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Design Questions Explored
                </p>
                <ul className="space-y-3">
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    How might technology facilitate genuine cultural connection
                    rather than superficial tourism?
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    What role should local voices play in shaping a
                    traveller&rsquo;s experience of a place?
                  </li>
                  <li className="text-base leading-relaxed text-muted-foreground text-justify">
                    Can speculative design make us rethink the emotional goals
                    of travel technology?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16 sm:my-24" />

        {/* ── Key Metrics ── */}
        <WanderomaMetrics />

        <Separator className="my-16 sm:my-24" />

        {/* ── Research Methods ── */}
        <WanderomaResearch />

        <Separator className="my-16 sm:my-24" />

        {/* ── Process Highlights ── */}
        <WanderomaProcess />

        <Separator className="my-16 sm:my-24" />

        {/* ── Testing & Feedback ── */}
        <WanderomaTesting />

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
                  "The emotional framing resonated deeply. Participants consistently described wanting travel tools that prioritise feeling over function, validating the core design hypothesis that cultural connection is an unmet emotional need.",
                  "Participatory research methods surfaced insights that traditional interviews missed. The Love/Hate Letter exercise, in particular, revealed desires and frustrations that participants had not previously articulated about their travel experiences.",
                  "The speculative features sparked genuine imagination. Rather than evaluating features as 'useful or not,' participants engaged with them as possibilities, discussing how they would change the way they approach a new city or culture.",
                  "The Design Thinking framework provided a clear, rigorous structure for navigating a project with significant ambiguity, keeping the work grounded in research even when the concepts were deliberately speculative.",
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
                What Needs Further Exploration
              </h3>
              <ul className="space-y-4">
                {[
                  "The tension between speculative ambition and practical usability was ever-present. Some features felt inspiring as concepts but raised legitimate questions about feasibility, community consent, and sustainable content sourcing.",
                  "Cultural sensitivity is a design challenge without a clean solution. Representing communities authentically requires ongoing collaboration, not a one-time design sprint. Future iterations would need embedded local partnerships.",
                  "The Reflection Journal generated mixed responses: conceptually valued but practically questioned. Travellers were unsure whether they would pause to reflect during a trip, suggesting the prompt design needs more contextual intelligence.",
                  "Long-term engagement and retention remain untested. As a speculative project, Wanderoma could not measure whether the cultural storytelling approach sustains interest beyond the novelty of first use.",
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
                Wanderoma taught me that speculative design is not about
                predicting the future. It is about creating a space where people
                can imagine differently, where the question shifts from
                &ldquo;what does the user want?&rdquo; to &ldquo;what could the
                experience become if we designed with emotional depth as the
                primary metric?&rdquo;
              </p>

              <div className="bg-secondary/50 p-8 sm:p-10">
                <p className="text-lg sm:text-xl leading-relaxed italic text-foreground/80 text-justify">
                  &ldquo;The most powerful moment in this project was not a
                  usability finding or a validated hypothesis. It was watching a
                  participant describe a trip they had taken years ago, realising
                  for the first time that they had been a spectator in someone
                  else&rsquo;s culture rather than a guest. That moment of
                  recognition is what Wanderoma is really designing
                  for.&rdquo;
                </p>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground mt-8 text-justify">
                Working at the intersection of speculative design and
                participatory methods reinforced my belief that the most valuable
                design outcomes are not always the most buildable ones. Wanderoma
                exists as a provocation, a way of asking whether travel
                technology could serve human curiosity and cultural respect as
                deeply as it currently serves convenience and commerce.
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
              href="https://drive.google.com/file/d/1Z-QZxuQopWIdKv6h88o_hRm-nOtxVivM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border border-border hover:bg-secondary/30 transition-colors duration-300"
            >
              <div>
                <p className="text-sm font-semibold tracking-tight mb-1">
                  Screens &amp; Prototype
                </p>
                <p className="text-xs text-muted-foreground">
                  Wireframes and interactive prototype
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-300"
              />
            </a>

            <a
              href="https://drive.google.com/drive/folders/14fvxitTwQMNfbFqttsIRTuImOPzqP36G?usp=drive_link"
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
