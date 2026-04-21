"use client";

import { motion } from "framer-motion";
import { Database, Globe, Code, Server, Layers, FileCode } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technicalDetails: string[];
  technologies: string[];
  outcomes: string[];
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Digital Books Microservice Application",
    description: "Comprehensive end-to-end module for a digital book ecosystem serving both authors and readers. Cloud Native Architecture with Microservices, enabling retrieval of book contents, chapters, sections, and objectives via GraphQL APIs.",
    icon: <FileCode className="w-6 h-6" />,
    technicalDetails: [
      "Developed RESTful APIs (GraphQL) for retrieving chapters, sections, and objectives by bookId",
      "Implemented microservices architecture for scalability and maintainability",
      "Integrated service layer with UI component using Angular/React frameworks",
      "Dockerized application and deployed to Amazon ECR repository",
      "Database design with entity-relationship modeling for book service domain"
    ],
    technologies: [
      "Frontend: Angular, React, Bootstrap, CSS, JavaScript, TypeScript, Karma, Cypress, Jest",
      "Backend: Spring Boot, Spring MVC, JDK, Maven, SonarQube, JUnit, NodeJS, Express JS",
      "Database: MySQL, MongoDB",
      "DevOps: AWS, Docker, Amazon ECR repository"
    ],
    outcomes: [
      "Scalable microservice architecture supporting concurrent author and reader workflows",
      "RESTful API implementation with proper validation and error handling (400, 204, 200, 500 status codes)",
      "Containerized deployment enabling cloud-native scalability",
      "Comprehensive testing coverage with unit and functional test reports"
    ]
  },
  {
    title: "Learning Management System (LMS)",
    description: "Full-featured LMS gateway enabling businesses to manage learning programs, training, and mocks for employees. System includes employee, mentor, and admin modules with comprehensive tracking, rating, and performance analytics.",
    icon: <Layers className="w-6 h-6" />,
    technicalDetails: [
      "Multi-module system: Employee (profile management, attendance tracking), Mentor (mock test creation, ratings), Admin (mentor/batch management, CRUD operations)",
      "Employee module: Profile creation with personal, educational, bank, technical, and experience information",
      "Mentor module: Mock test scheduling, performance ratings, employee progress tracking",
      "Admin module: Mentor approval/rejection, batch creation with technology assignments, comprehensive dashboard analytics"
    ],
    technologies: [
      "UI/UX: High-fidelity mockups with detailed user interface design",
      "Frontend frameworks supporting forms, data binding, and validations",
      "Backend microservices with appropriate unit test frameworks",
      "Database design with entity-relationship modeling"
    ],
    outcomes: [
      "Intuitive multi-role system serving employees, mentors, and administrators",
      "Comprehensive employee data management across 7 information categories",
      "Performance tracking with attendance monitoring and mock ratings visualization",
      "Scalable batch management supporting multiple technologies and mentor assignments"
    ]
  },
  {
    title: "ToffyJar Digital Website",
    description: "End-to-end development of digital marketing agency website from inception to launch. Cross-functional role encompassing strategic insights, UX/UI collaboration, content architecture, SEO optimization, and digital marketing execution.",
    icon: <Globe className="w-6 h-6" />,
    technicalDetails: [
      "Collaborated with development team on information architecture and user journey optimization",
      "Provided input on UX/UI design to enhance conversion paths and user experience",
      "Crafted compelling content aligned with digital marketing goals",
      "Implemented SEO-friendly features and search engine optimization best practices",
      "Strategized effective social media integration across platforms",
      "Executed pre-launch awareness and post-launch traffic generation campaigns",
      "Utilized analytical tools to track user behavior and refine approach based on insights"
    ],
    technologies: [
      "Web Development Stack (frontend and backend integration)",
      "SEO Tools and Analytics (Google Analytics, SEMrush)",
      "Social Media Management Platforms",
      "Content Management Systems"
    ],
    outcomes: [
      "Cohesive digital presence balancing visual appeal, user-friendliness, and functionality",
      "Optimized page load times and cross-platform compatibility",
      "Targeted digital campaigns driving measurable user engagement",
      "Ongoing optimization based on actionable analytics insights",
      "Successful integration of marketing strategy with technical development objectives"
    ]
  },
  {
    title: "Database Design & Architecture",
    description: "Critical database design for Learning Management System with structured data organization supporting efficient storage, management, and retrieval. Foundation for user-friendly and intuitive site structure.",
    icon: <Database className="w-6 h-6" />,
    technicalDetails: [
      "Entity-relationship modeling for employee, mentor, batch, mock, and admin modules",
      "Relational database design with proper normalization and relationships",
      "Tables designed for employee profiles (primary, secondary, education, address, bank, technical, experience, contact)",
      "Mentor and batch relationship mapping with technology associations",
      "Mock test and rating system with temporal tracking",
      "Admin module supporting comprehensive CRUD operations across all entities"
    ],
    technologies: [
      "Database: MySQL for relational data management",
      "Modeling: ER diagrams defining entity relationships and cardinality",
      "Integration: Database connections configurable via web service URLs"
    ],
    outcomes: [
      "Logically organized data structure ensuring consistency and accessibility",
      "Efficient query performance through proper indexing and relationships",
      "Scalable architecture supporting future feature expansion",
      "Well-documented database design facilitating development team collaboration"
    ]
  }
];

export default function DevelopmentGrid() {
  return (
    <div className="px-6 sm:px-8 pb-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background border border-border rounded-2xl p-8 hover:bg-secondary/30 transition-all duration-300"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-14 h-14 rounded-xl bg-muted/20 border border-border flex items-center justify-center flex-shrink-0">
                <div className="text-muted-foreground">
                  {project.icon}
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Technical Implementation</h3>
                <ul className="space-y-2">
                  {project.technicalDetails.map((detail: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-muted-foreground mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Technologies</h3>
                  <ul className="space-y-1.5">
                    {project.technologies.map((tech: string, i: number) => (
                      <li key={i} className="text-sm text-muted-foreground/90">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Outcomes</h3>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/90">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Technical Skills & Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-8 bg-background border border-border rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-6 text-foreground">Development Experience & Capabilities</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-5 h-5 text-muted-foreground" />
                <h4 className="font-medium text-foreground/90">Backend Development</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Java, Spring Boot, MySQL, REST APIs, JPA</p>
              <p className="text-xs text-muted-foreground/80">
                Designed secure RESTful APIs improving data retrieval efficiency by 25% and supporting smoother frontend interactions
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Server className="w-5 h-5 text-muted-foreground" />
                <h4 className="font-medium text-foreground/90">Quality & Testing</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-2">JUnit 5, SonarLint, Swagger, Code Quality</p>
              <p className="text-xs text-muted-foreground/80">
                Increased reliability through 35% higher unit test coverage and comprehensive API documentation
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-muted-foreground" />
                <h4 className="font-medium text-foreground/90">Agile & Collaboration</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Scrum, Cross-functional Teams, CI/CD</p>
              <p className="text-xs text-muted-foreground/80">
                Collaborated in Agile rituals enabling 12-15% faster sprint delivery and alignment between engineering and UX goals
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <h4 className="text-sm font-medium text-foreground/90 mb-4">Professional Experience Highlights</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  <strong className="text-foreground/80">Programmer Analyst, Cognizant:</strong> Supported end-to-end product development from user requirement analysis and UI wireframing to scalable full-stack implementation using Angular and Spring Boot
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  <strong className="text-foreground/80">Digital Marketing Executive:</strong> Cross-functional role actively contributing to website development, ensuring cohesive integration of marketing strategy with technical objectives
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  <strong className="text-foreground/80">Technical Approach:</strong> Balance between technical precision and understanding of how systems serve user and business needs, ensuring functionality, performance, and seamless integration
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
