"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

interface ContentPiece {
  title: string;
  description: string;
  keyPoints: string[];
  metrics?: string;
}

const contentPieces: ContentPiece[] = [
  {
    title: "Your videos now can get longer attention than Kardashians",
    description: "A strategic exploration of video marketing's power to capture and convert audiences in the digital landscape. This piece demonstrates how video content significantly outperforms traditional text-based marketing across key metrics.",
    keyPoints: [
      "Videos processed by brain 60,000 times faster than text",
      "75% more likely to purchase after watching product videos",
      "Visual storytelling as primary content format across social platforms",
      "High ROI through brand recognition and conversion optimization",
      "Strategic integration across website, social media, and email marketing"
    ],
    metrics: "Demonstrated 75% increase in purchase likelihood through video marketing strategies"
  },
  {
    title: "5 things business like yours must do in 2019",
    description: "A forward-looking analysis of digital marketing trends and emerging technologies reshaping customer engagement strategies. Content focuses on practical implementation of chatbots, video marketing, personalization, quality content, and voice search optimization.",
    keyPoints: [
      "Chatbot integration for 24/7 customer engagement and lead qualification",
      "Video marketing across multiple touchpoints for maximum engagement",
      "Personalization strategies using customer data and behavioral insights",
      "Content quality and SEO optimization for organic discoverability",
      "Voice search adaptation with AI-powered assistants (Siri, Alexa, Google)"
    ],
    metrics: "1.5 billion people interacting with chatbots; 75% of businesses already using or planning to use video"
  }
];

export default function ContentWritingGrid() {
  return (
    <div className="px-6 sm:px-8 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contentPieces.map((piece: ContentPiece, index: number) => (
            <motion.div
              key={piece.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background border border-border rounded-2xl p-8 hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted/20 border border-border flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-foreground/80 transition-colors">
                    {piece.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {piece.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-foreground/90 mb-3">Key Topics Covered:</h4>
                  <ul className="space-y-2">
                    {piece.keyPoints.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-muted-foreground/50 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {piece.metrics && (
                  <div className="pt-4 mt-4 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Impact</p>
                    <p className="text-sm text-foreground/80">{piece.metrics}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-8 bg-background border border-border rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-4 text-foreground">Content Writing Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <p className="mb-4">
                A matured approach to content writing involves thorough research, fact-checking, and adherence to a consistent tone and style. Whether it's marketing copy, blog posts, or technical documentation, the content writer serves as a bridge between complex information and the reader, distilling it into digestible and valuable insights.
              </p>
              <p>
                Furthermore, the writer must understand the significance of search engine optimization (SEO) principles. By strategically incorporating relevant keywords and optimizing content for online discoverability, they enhance the visibility and accessibility of the material in the digital landscape.
              </p>
            </div>
            <div>
              <p className="mb-4">
                In essence, content writing is a professional discipline that requires a blend of creativity, analytical thinking, and a commitment to meeting the objectives of the communication task at hand.
              </p>
              <p className="text-xs italic text-muted-foreground/70 pt-2 border-t border-border">
                Note: Due to data protection policies, specific client creatives and detailed campaign materials cannot be shared. The work showcased represents the strategic thinking and communication approach applied across various organizations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
