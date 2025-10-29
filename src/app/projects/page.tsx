'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ExternalLink, TrendingUp, Calendar, Users, Award } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects - Michele Sodano | AI Engineer & Data Scientist",
  description: "Comprehensive overview of Michele Sodano's research and development projects in AI, machine learning, and computational modeling.",
  keywords: ["AI projects", "machine learning research", "data science portfolio", "deep learning", "IoT analytics", "generative AI"],
  authors: [{ name: "Michele Sodano" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const allProjects = [
  {
    id: "inference-attacks",
    title: "Inference Attacks on Smart Buildings",
    description: "Privacy & ML: Built Python pipeline for IoT time-series analysis and privacy protection",
    longDescription: "Comprehensive research project focused on identifying and mitigating privacy vulnerabilities in smart building IoT systems. Developed advanced ML models to detect occupancy patterns while implementing differential privacy techniques to protect user data.",
    problem: "Smart building IoT systems vulnerable to privacy inference attacks through occupancy detection patterns, potentially exposing sensitive information about building occupants.",
    solution: "Built comprehensive Python pipeline (Pandas/NumPy/sklearn) for 1‑min IoT time‑series analysis, modeled occupancy via affine thermal model combined with supervised/unsupervised ML approaches.",
    results: [
      "Proposed novel obfuscation & differential privacy techniques to reduce data leakage by 85%",
      "Developed privacy-aware ML models with 92% accuracy while maintaining privacy guarantees",
      "Published research on trustworthy AI in top-tier conferences",
      "Created open-source framework for privacy-preserving IoT analytics"
    ],
    technologies: ["Python", "scikit-learn", "PyTorch", "Jupyter", "Docker", "Differential Privacy", "IoT Analytics"],
    duration: "18 months",
    team: "4 researchers",
    status: "Published",
    category: "Research",
    year: "2024"
  },
  {
    id: "surrogate-models",
    title: "Surrogate Models for Energy Simulation",
    description: "DL Forecasting: Automated energy simulation with deep learning for real-time design feedback",
    longDescription: "Revolutionary approach to building energy simulation using deep learning surrogate models. Replaced computationally expensive EnergyPlus simulations with fast, accurate neural network predictions.",
    problem: "Traditional energy simulation tools (EnergyPlus) require hours to days for complex building analysis, making iterative design processes impractical for architects and engineers.",
    solution: "Automated >15k EnergyPlus runs (Rhino/Grasshopper/Honeybee integration), trained multiple DL architectures (GRU/Seq2Seq/1D‑CNN) for hourly cooling‑load prediction with weather and occupancy inputs.",
    results: [
      ">90% runtime reduction vs. full EnergyPlus simulation (hours → seconds)",
      "Real‑time design feedback enabled for architectural workflows",
      "Automated 15k+ simulation runs with 95% accuracy maintained",
      "Integrated into commercial architectural design software"
    ],
    technologies: ["PyTorch", "EnergyPlus", "Grasshopper", "NumPy", "Rhino", "Honeybee", "Time-series Analysis"],
    duration: "24 months",
    team: "3 researchers + 2 architects",
    status: "Deployed",
    category: "Applied Research",
    year: "2023"
  },
  {
    id: "generative-ai-architecture",
    title: "Generative AI for Architectural Design",
    description: "CV/Generative: AI-powered design tools for architectural synthesis and segmentation",
    longDescription: "Pioneering application of generative AI in architectural design, developing tools for automated design synthesis and intelligent building component segmentation.",
    problem: "Traditional architectural design workflows lack AI-assisted creative tools, limiting exploration of design alternatives and requiring manual interpretation of complex spatial relationships.",
    solution: "Trained multiple generative models: 3D‑GANs for volumetric design synthesis, cGANs for style transfer, U‑Nets for semantic segmentation, plus image‑to‑geometry pipelines using OpenCV + TensorFlow.",
    results: [
      "Co‑instructor @ DigitalFUTURES international workshop (500+ attendees)",
      "Mentored 40+ participants in generative design techniques",
      "Advanced generative design workflows adopted by 5+ architecture firms",
      "Featured in Architectural Design magazine"
    ],
    technologies: ["TensorFlow", "Keras", "OpenCV", "PyTorch", "GANs", "Computer Vision", "3D Modeling"],
    duration: "12 months",
    team: "2 researchers + 1 designer",
    status: "Workshop",
    category: "Applied Research",
    year: "2022"
  },
  {
    id: "multimodal-rag-agents",
    title: "Multimodal RAG Agents for IoT Analytics",
    description: "LLM Orchestration: Context-aware agents for smart building data interpretation",
    longDescription: "Advanced multimodal AI system combining Large Language Models with Retrieval-Augmented Generation for intelligent IoT data analysis and privacy threat simulation.",
    problem: "IoT systems generate vast amounts of multimodal data (sensor readings, images, text logs) that require expert knowledge to interpret, especially for cybersecurity threat assessment.",
    solution: "Developed LangChain-based RAG system with multimodal capabilities, integrating sensor data, building layouts, and domain knowledge for automated threat detection and privacy risk assessment.",
    results: [
      "Automated privacy attack simulation with 88% accuracy in threat detection",
      "Reduced expert analysis time from days to hours",
      "Identified 15+ previously unknown privacy vulnerabilities",
      "Deployed in 3 smart building testbeds"
    ],
    technologies: ["LangChain", "OpenAI GPT-4", "Vector Databases", "Python", "IoT Sensors", "Computer Vision", "NLP"],
    duration: "8 months",
    team: "Solo project",
    status: "Deployed",
    category: "Applied Research",
    year: "2024"
  },
  {
    id: "spatio-temporal-gnn",
    title: "Spatio-Temporal Graph Neural Networks for Building Modeling",
    description: "Graph ML: Advanced building performance prediction using spatial-temporal relationships",
    longDescription: "Novel application of Graph Neural Networks to model complex spatial and temporal relationships in building systems for enhanced energy performance prediction.",
    problem: "Traditional building simulation treats spaces as isolated units, missing crucial spatial relationships and temporal dependencies that significantly impact energy performance.",
    solution: "Developed ST-GNN architecture modeling buildings as dynamic graphs where nodes represent spaces/systems and edges capture thermal/airflow relationships, with temporal attention mechanisms for time-series prediction.",
    results: [
      "15% improvement in energy prediction accuracy vs. traditional methods",
      "Successfully modeled complex multi-zone building interactions",
      "Reduced computational complexity by 60% compared to CFD simulations",
      "Framework adopted by 2 major engineering consultancies"
    ],
    technologies: ["PyTorch Geometric", "Graph Neural Networks", "Python", "Building Physics", "Time-series", "Attention Mechanisms"],
    duration: "15 months",
    team: "3 researchers",
    status: "Published",
    category: "Research",
    year: "2023"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A comprehensive overview of my research and development projects in AI, machine learning and computational modeling
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      <CardDescription className="text-base mb-4">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year} • {project.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.team}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          {project.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Long Description */}
                  <p className="text-foreground/90 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">🎯 Problema</h4>
                      <p className="text-sm text-muted leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">💡 Soluzione</h4>
                      <p className="text-sm text-muted leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Key Results
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.results.map((result, i) => (
                        <li key={i} className="text-sm text-muted flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-muted rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Back to Portfolio */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 shadow-sm"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
